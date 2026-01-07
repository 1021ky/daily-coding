"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const session_1 = require("./session");
const oauth_controller_1 = require("@/lib/zaim/oauth_controller");
const router = express.Router();
router.use(session_1.default);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.get('/', (_req, res) => {
    res.send('Hello World!');
});
// OAuth認証用のエンドポイント
router.get('/zaim/oauth/request_token', oauth_controller_1.handleGetRequestToken); // POSTにしたいが、OAuthの仕様上GETにしている
router.get('/zaim/oauth/access_token', oauth_controller_1.handleGetAccessToken); // POSTにしたいが、OAuthの仕様上GETにしている
const app = express();
app.use(router);
const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map