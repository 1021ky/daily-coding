import 'express-session';

declare module 'express-session' {
    interface Session {
        flowState?: 'authorize' | 'access';
        oauthRequestToken?: string;
        oauthRequestTokenSecret?: string;
        oauthAccessToken?: string;
        oauthAccessTokenSecret?: string;
    }
}