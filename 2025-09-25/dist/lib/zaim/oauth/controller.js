"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePostRequestToken = handlePostRequestToken;
exports.handlePostAccessToken = handlePostAccessToken;
const authorization_1 = require("@/lib/zaim/oauth/authorization");
async function handlePostRequestToken(req, res) {
    try {
        const session = req.session;
        const authorizeUrl = await (0, authorization_1.createAuthorizeUrl)(session);
        await saveSession(session);
        res.redirect(authorizeUrl);
    }
    catch (err) {
        console.error('Request token error', err);
        res.status(500).send('リクエストトークン取得に失敗しました');
    }
}
async function handlePostAccessToken(req, res) {
    console.log(`handlePostAccessToken called with query:`, req.query);
    console.log(`handlePostAccessToken called with session:`, req.session);
    try {
        if (!hasRequestToken(req.session)) {
            res.status(400).send('リクエストトークンが存在しません');
            return;
        }
        const { oauth_token, oauth_verifier } = req.query;
        if (typeof oauth_token !== 'string' || typeof oauth_verifier !== 'string') {
            res.status(400).send('無効なOAuthトークンまたはOAuth検証コードです');
            return;
        }
        await (0, authorization_1.getAccessToken)(oauth_token, req.session.oauthRequestTokenSecret, oauth_verifier, req.session);
        res.send('コールバック処理が完了しました。');
    }
    catch (err) {
        console.error('Callback error', err);
        res.status(500).send('コールバック処理に失敗しました');
    }
}
function hasRequestToken(session) {
    if (!session)
        return false;
    if (session.flowState !== 'authorize')
        return false;
    return !!session.oauthRequestToken && !!session.oauthRequestTokenSecret;
}
async function saveSession(session) {
    await new Promise((resolve, reject) => {
        session.save((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
//# sourceMappingURL=controller.js.map