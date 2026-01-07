/**
 * zaimのAPIを呼んで必要なトークンを取得する
 *
 * トークンの取得方式はOAuth 1.0aのobb方式を使用する
 */

import { Session } from 'express-session';
import { client as zaimOAuthClient } from '@/lib/zaim/oauth_client';

const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL;
const ZAIM_CALLBACK_URL = (process.env.ZAIM_CALLBACK_URL ?? 'oob').trim();

if (!ZAIM_AUTH_AUTHORIZE_URL) {
    throw new Error('ZAIM_AUTH_AUTHORIZE_URL is not defined');
}

export interface OAuthTokenSession {
    flowState?: 'authorize' | 'access';
    oauthRequestToken?: string;
    oauthRequestTokenSecret?: string;
    oauthAccessToken?: string;
    oauthAccessTokenSecret?: string;
}

export async function createAuthorizeUrl(session: OAuthTokenSession & Session): Promise<string> {
    return new Promise((resolve, reject) => {
        const requestCallback = (err: unknown, token?: string, secret?: string, _results?: unknown) => {
            if (err || !token || !secret) {
                reject(err ?? new Error('Failed to acquire request token'));
                return;
            }

            session.flowState = 'authorize';
            session.oauthRequestToken = token;
            session.oauthRequestTokenSecret = secret;

            console.log('Request Token:', token);
            console.log('Request Token Secret:', secret);

            const authorizeUrl = buildAuthorizeUrl(token);
            console.log('Authorize URL:', authorizeUrl);

            resolve(authorizeUrl);
        };
        const requestParams = {
            oauth_callback: isOobCallback() ? 'oob' : ZAIM_CALLBACK_URL,
        };
        zaimOAuthClient.getOAuthRequestToken(requestParams, requestCallback);
    });
}

export async function getAccessToken(
    oauthToken: string,
    oauthTokenSecret: string,
    oauthVerifier: string,
    session: OAuthTokenSession,
): Promise<{ accessToken: string; accessTokenSecret: string }> {
    return new Promise((resolve, reject) => {
        zaimOAuthClient.getOAuthAccessToken(
            oauthToken,
            oauthTokenSecret,
            oauthVerifier,
            (err, accessToken, accessTokenSecret) => {
                if (err) {
                    reject(err);
                    return;
                }
                session.flowState = 'access';
                session.oauthAccessToken = accessToken;
                session.oauthAccessTokenSecret = accessTokenSecret;
                resolve({ accessToken, accessTokenSecret });
            },
        );
    });
}

function buildAuthorizeUrl(oauthToken: string): string {
    const url = new URL(ZAIM_AUTH_AUTHORIZE_URL!);
    url.searchParams.set('oauth_token', oauthToken);

    if (!isOobCallback()) {
        url.searchParams.set('oauth_callback', ZAIM_CALLBACK_URL);
    }

    return url.toString();
}

function isOobCallback(): boolean {
    return ZAIM_CALLBACK_URL.toLowerCase() === 'oob';
}