"use strict";
/**
 * zaimのAPIを呼んで必要なトークンを取得する
 *
 * トークンの取得方式はOAuth 1.0aのobb方式を使用する
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthorizeUrl = createAuthorizeUrl;
exports.getAccessToken = getAccessToken;
const oauth_client_1 = require("@/lib/zaim/oauth_client");
const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL;
const ZAIM_CALLBACK_URL = (process.env.ZAIM_CALLBACK_URL ?? 'oob').trim();
if (!ZAIM_AUTH_AUTHORIZE_URL) {
    throw new Error('ZAIM_AUTH_AUTHORIZE_URL is not defined');
}
async function createAuthorizeUrl(session) {
    return new Promise((resolve, reject) => {
        const requestCallback = (err, token, secret, _results) => {
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
        oauth_client_1.client.getOAuthRequestToken(requestParams, requestCallback);
    });
}
async function getAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, session) {
    return new Promise((resolve, reject) => {
        oauth_client_1.client.getOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, (err, accessToken, accessTokenSecret) => {
            if (err) {
                reject(err);
                return;
            }
            session.flowState = 'access';
            session.oauthAccessToken = accessToken;
            session.oauthAccessTokenSecret = accessTokenSecret;
            resolve({ accessToken, accessTokenSecret });
        });
    });
}
function buildAuthorizeUrl(oauthToken) {
    const url = new URL(ZAIM_AUTH_AUTHORIZE_URL);
    url.searchParams.set('oauth_token', oauthToken);
    if (!isOobCallback()) {
        url.searchParams.set('oauth_callback', ZAIM_CALLBACK_URL);
    }
    return url.toString();
}
function isOobCallback() {
    return ZAIM_CALLBACK_URL.toLowerCase() === 'oob';
}
//# sourceMappingURL=authorization.js.map