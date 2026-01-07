import session = require('express-session');

const sessionMiddleware: any = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 60000 },
});

export default sessionMiddleware;
