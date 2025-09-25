"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zaimOAuthClient = void 0;
const oauth_1 = require("oauth");
const ZAIM_CONSUMER_KEY = process.env.ZAIM_CONSUMER_KEY;
const ZAIM_CONSUMER_SECRET = process.env.ZAIM_CONSUMER_SECRET;
const ZAIM_AUTH_REQUEST_TOKEN_URL = process.env.ZAIM_AUTH_REQUEST_TOKEN_URL;
const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL;
const ZAIM_AUTH_ACCESS_TOKEN_URL = process.env.ZAIM_AUTH_ACCESS_TOKEN_URL;
const ZAIM_CALLBACK_URL = process.env.ZAIM_CALLBACK_URL;
exports.zaimOAuthClient = new oauth_1.OAuth(ZAIM_AUTH_REQUEST_TOKEN_URL, ZAIM_AUTH_ACCESS_TOKEN_URL, ZAIM_CONSUMER_KEY, ZAIM_CONSUMER_SECRET, '1.0A', ZAIM_CALLBACK_URL || null, 'HMAC-SHA1');
//# sourceMappingURL=api_client.js.map