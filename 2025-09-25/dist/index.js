"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const session_1 = require("./session");
const express = require("express");
const controller_1 = require("@/lib/zaim/oauth/controller");
const router = express.Router();
router.use(session_1.default);
router.get('/', (_req, res) => {
    res.send('Hello World!');
});
// OAuth認証用のエンドポイント
router.get('/zaim/oauth/request_token', controller_1.handlePostRequestToken); // POSTにしたいが、OAuthの仕様上GETにしている
router.get('/zaim/oauth/access_token', controller_1.handlePostAccessToken); // POSTにしたいが、OAuthの仕様上GETにしている
const app = express();
app.use(router);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
exports.default = app;
//# sourceMappingURL=index.js.map