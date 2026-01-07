import { Session } from 'express-session';
export interface OAuthTokenSession {
    flowState?: 'authorize' | 'access';
    oauthRequestToken?: string;
    oauthRequestTokenSecret?: string;
    oauthAccessToken?: string;
    oauthAccessTokenSecret?: string;
}
/**
 * ZaimのOAuth認証でユーザーがアクセス許可をした後に遷移するURLを生成する
 * @returns {Promise<string>} 認証URLを含むPromise
 */
export declare function createAuthorizeUrl(session: OAuthTokenSession & Session): Promise<string>;
export declare function getAccessToken(oauthToken: string, oauthTokenSecret: string, oauthVerifier: string, session: OAuthTokenSession): Promise<{
    accessToken: string;
    accessTokenSecret: string;
}>;
//# sourceMappingURL=authorization.d.ts.map