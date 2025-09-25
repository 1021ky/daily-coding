import { zaimOAuthClient } from '@/lib/zaim/oauth/api_client';
import { Session } from 'express-session';

const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL as string;

export interface OAuthTokenSession {
    flowState?: 'authorize' | 'access';
    oauthRequestToken?: string;
    oauthRequestTokenSecret?: string;
    oauthAccessToken?: string;
    oauthAccessTokenSecret?: string;
}

/**
 * ZaimのOAuth認証でユーザーがアクセス許可をした後に遷移するURLを生成する
 * @returns {Promise<string>} 認証URLを含むPromise
 */
export async function createAuthorizeUrl(session: OAuthTokenSession & Session): Promise<string> {
    return new Promise((resolve, reject) => {
        zaimOAuthClient.getOAuthRequestToken({ oauth_callback: process.env.ZAIM_CALLBACK_URL }, (err, token, secret) => {
            if (err) {
                reject(err);
                return;
            }
            session.flowState = 'authorize';
            session.oauthRequestToken = token;
            session.oauthRequestTokenSecret = secret;
            console.log('Request Token:', token);
            console.log('Request Token Secret:', secret);
            const authorizeUrl = `${ZAIM_AUTH_AUTHORIZE_URL}?oauth_token=${token}&oauth_callback=${process.env.ZAIM_CALLBACK_URL!}`;
            console.log('Authorize URL:', authorizeUrl);
            session.save(saveErr => {
                if (saveErr) {
                    reject(saveErr);
                    return;
                }
                resolve(authorizeUrl);
            });
        });
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