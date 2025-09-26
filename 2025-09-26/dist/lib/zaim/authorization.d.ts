/**
 * zaimのAPIを呼んで必要なトークンを取得する
 *
 * トークンの取得方式はOAuth 1.0aのobb方式を使用する
 */
import { Session } from 'express-session';
export interface OAuthTokenSession {
    flowState?: 'authorize' | 'access';
    oauthRequestToken?: string;
    oauthRequestTokenSecret?: string;
    oauthAccessToken?: string;
    oauthAccessTokenSecret?: string;
}
export declare function createAuthorizeUrl(session: OAuthTokenSession & Session): Promise<string>;
export declare function getAccessToken(oauthToken: string, oauthTokenSecret: string, oauthVerifier: string, session: OAuthTokenSession): Promise<{
    accessToken: string;
    accessTokenSecret: string;
}>;
//# sourceMappingURL=authorization.d.ts.map