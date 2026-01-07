import { OAuth } from 'oauth';

const ZAIM_CONSUMER_KEY = process.env.ZAIM_CONSUMER_KEY;
const ZAIM_CONSUMER_SECRET = process.env.ZAIM_CONSUMER_SECRET;
const ZAIM_AUTH_REQUEST_TOKEN_URL = process.env.ZAIM_AUTH_REQUEST_TOKEN_URL;
const ZAIM_AUTH_AUTHORIZE_URL = process.env.ZAIM_AUTH_AUTHORIZE_URL;
const ZAIM_AUTH_ACCESS_TOKEN_URL = process.env.ZAIM_AUTH_ACCESS_TOKEN_URL;
const ZAIM_CALLBACK_URL = process.env.ZAIM_CALLBACK_URL;

export const zaimOAuthClient = new OAuth(
    ZAIM_AUTH_REQUEST_TOKEN_URL as string,
    ZAIM_AUTH_ACCESS_TOKEN_URL as string,
    ZAIM_CONSUMER_KEY as string,
    ZAIM_CONSUMER_SECRET as string,
    '1.0A',
    ZAIM_CALLBACK_URL || null,
    'HMAC-SHA1'
);

