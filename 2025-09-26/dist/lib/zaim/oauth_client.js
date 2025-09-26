"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const oauth_1 = require("oauth");
exports.client = new oauth_1.OAuth(process.env.ZAIM_AUTH_REQUEST_TOKEN_URL, process.env.ZAIM_AUTH_ACCESS_TOKEN_URL, process.env.ZAIM_CONSUMER_KEY, process.env.ZAIM_CONSUMER_SECRET, process.env.ZAIM_OAUTH_VERSION, 'oob', // oob方式を使用するためコールバックURLはoob
process.env.ZAIM_OAUTH_SIGNATURE_METHOD);
//# sourceMappingURL=oauth_client.js.map