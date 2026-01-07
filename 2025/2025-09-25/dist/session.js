"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session = require("express-session");
const sessionMiddleware = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 60000 },
});
exports.default = sessionMiddleware;
//# sourceMappingURL=session.js.map