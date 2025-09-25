/**
 * Zaim OAuth認証のリクエスト処理を行うコントローラー
 */
import type { Request, Response } from 'express';
import { createAuthorizeUrl, OAuthTokenSession, getAccessToken } from '@/lib/zaim/oauth/authorization';
import { Session } from 'express-session';

export async function handlePostRequestToken(req: Request, res: Response): Promise<void> {
    try {
        const session = req.session as OAuthTokenSession & Session;
        const authorizeUrl = await createAuthorizeUrl(session);

        await saveSession(session);

        res.redirect(authorizeUrl);
    } catch (err) {
        console.error('Request token error', err);
        res.status(500).send('リクエストトークン取得に失敗しました');
    }
}

export async function handlePostAccessToken(req: Request, res: Response): Promise<void> {
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

        await getAccessToken(
            oauth_token,
            req.session.oauthRequestTokenSecret!,
            oauth_verifier,
            req.session,
        );

        res.send('コールバック処理が完了しました。');
    } catch (err) {
        console.error('Callback error', err);
        res.status(500).send('コールバック処理に失敗しました');
    }
}

function hasRequestToken(session: OAuthTokenSession): boolean {
    if (!session) return false;
    if (session.flowState !== 'authorize') return false;

    return !!session.oauthRequestToken && !!session.oauthRequestTokenSecret;
}

async function saveSession(session: Session): Promise<void> {
    await new Promise<void>((resolve, reject) => {
        session.save((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}