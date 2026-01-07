/**
 * Zaim OAuth認証のリクエスト処理を行うコントローラー
 */
import type { Request, Response } from 'express';
import { Session } from 'express-session';
import { createAuthorizeUrl, getAccessToken, OAuthTokenSession } from '@/lib/zaim/authorization';

export async function handleGetRequestToken(req: Request, res: Response): Promise<void> {
    try {
        const session = req.session as OAuthTokenSession & Session;
        const authorizeUrl = await createAuthorizeUrl(session);

        await saveSession(session);

        res.json({
            authorizeUrl,
            message: 'Zaimの認証ページを開き、表示された認証コード(PIN)を /zaim/oauth/access_token?oauth_verifier=XXXX に入力してください。',
        });
    } catch (err) {
        console.error('Request token error', err);
        res.status(500).json({ message: 'リクエストトークン取得に失敗しました' });
    }
}

export async function handleGetAccessToken(req: Request, res: Response): Promise<void> {
    try {
        const session = req.session as OAuthTokenSession & Session;

        if (!hasRequestToken(session)) {
            res.status(400).json({ message: 'リクエストトークンが存在しません。先に /zaim/oauth/request_token を実行してください。' });
            return;
        }

        const oauthVerifier = extractVerifier(req);
        if (!oauthVerifier) {
            res.status(400).json({ message: 'OAuth検証コード(PIN)が指定されていません。' });
            return;
        }

        const { accessToken, accessTokenSecret } = await getAccessToken(
            session.oauthRequestToken!,
            session.oauthRequestTokenSecret!,
            oauthVerifier,
            session,
        );

        await saveSession(session);

        res.json({
            message: 'アクセストークンを取得しました。',
            oauthAccessToken: accessToken,
            oauthAccessTokenSecret: accessTokenSecret,
        });
    } catch (err) {
        console.error('Access token error', err);
        res.status(500).json({ message: 'アクセストークン取得に失敗しました' });
    }
}

function hasRequestToken(session: OAuthTokenSession): boolean {
    if (!session) return false;
    if (session.flowState !== 'authorize') return false;

    return !!session.oauthRequestToken && !!session.oauthRequestTokenSecret;
}

function extractVerifier(req: Request): string | undefined {
    const candidates: Array<unknown> = [
        req.query.oauth_verifier,
        // Zaimの待機画面から手動でコピーしたURLに含まれるケースに備えておく
        (req.query as Record<string, unknown>)['amp;oauth_verifier'],
        // 将来的にPOSTに切り替えたときに備えてボディも見る
        (req.body as Record<string, unknown> | undefined)?.oauth_verifier,
    ];

    for (const candidate of candidates) {
        if (typeof candidate === 'string' && candidate.trim().length > 0) {
            return candidate.trim();
        }
    }

    return undefined;
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