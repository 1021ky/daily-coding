import { OAuth } from 'oauth';

export const client = new OAuth(
    process.env.ZAIM_AUTH_REQUEST_TOKEN_URL!,
    process.env.ZAIM_AUTH_ACCESS_TOKEN_URL!,
    process.env.ZAIM_CONSUMER_KEY!,
    process.env.ZAIM_CONSUMER_SECRET!,
    process.env.ZAIM_OAUTH_VERSION!,
    'oob', // oob方式を使用するためコールバックURLはoob
    process.env.ZAIM_OAUTH_SIGNATURE_METHOD!,
);
