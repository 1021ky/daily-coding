"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zaimClient = void 0;
const oauth_1 = require("oauth");
const ZAIM_CONSUMER_KEY = process.env.ZAIM_CONSUMER_KEY;
const ZAIM_CONSUMER_SECRET = process.env.ZAIM_CONSUMER_SECRET;
const ZAIM_AUTH_REQUEST_TOKEN_URL = process.env.ZAIM_AUTH_REQUEST_TOKEN_URL;
const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL;
const ZAIM_AUTH_ACCESS_TOKEN_URL = process.env.ZAIM_AUTH_ACCESS_TOKEN_URL;
const ZAIM_CALLBACK_URL = process.env.ZAIM_CALLBACK_URL;
console.log('Environment Variables:', {
    ZAIM_CONSUMER_KEY,
    ZAIM_CONSUMER_SECRET,
    ZAIM_AUTH_REQUEST_TOKEN_URL,
    ZAIM_AUTH_AUTHORIZE_URL,
    ZAIM_AUTH_ACCESS_TOKEN_URL,
    ZAIM_CALLBACK_URL
});
exports.zaimClient = new oauth_1.OAuth(ZAIM_AUTH_REQUEST_TOKEN_URL, ZAIM_AUTH_ACCESS_TOKEN_URL, ZAIM_CONSUMER_KEY, ZAIM_CONSUMER_SECRET, '1.0A', ZAIM_CALLBACK_URL || null, 'HMAC-SHA1');
exports.zaimClient.getOAuthRequestToken((err, token, secret) => {
    if (err) {
        console.error('Request token error', err);
        return;
    }
    const oauthToken = token;
    const oauthTokenSecret = secret;
    const flowState = 'authorize';
    const authorizeUrl = `${ZAIM_AUTH_AUTHORIZE_URL}?oauth_token=${token}`;
    console.log(`以下のリンクをクリックしてください。<br><a href="${authorizeUrl}">${authorizeUrl}</a>`);
});
//# sourceMappingURL=authentication.js.map