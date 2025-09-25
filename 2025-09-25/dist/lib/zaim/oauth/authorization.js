"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthorizeUrl = createAuthorizeUrl;
exports.getAccessToken = getAccessToken;
const api_client_1 = require("@/lib/zaim/oauth/api_client");
const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL;
/**
 * ZaimのOAuth認証でユーザーがアクセス許可をした後に遷移するURLを生成する
 * @returns {Promise<string>} 認証URLを含むPromise
 */
async function createAuthorizeUrl(session) {
    return new Promise((resolve, reject) => {
        api_client_1.zaimOAuthClient.getOAuthRequestToken({ oauth_callback: process.env.ZAIM_CALLBACK_URL }, (err, token, secret) => {
            if (err) {
                reject(err);
                return;
            }
            session.flowState = 'authorize';
            session.oauthRequestToken = token;
            session.oauthRequestTokenSecret = secret;
            console.log('Request Token:', token);
            console.log('Request Token Secret:', secret);
            const authorizeUrl = `${ZAIM_AUTH_AUTHORIZE_URL}?oauth_token=${token}&oauth_callback=${process.env.ZAIM_CALLBACK_URL}`;
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
async function getAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, session) {
    return new Promise((resolve, reject) => {
        api_client_1.zaimOAuthClient.getOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, (err, accessToken, accessTokenSecret) => {
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
//# sourceMappingURL=authorization.js.map