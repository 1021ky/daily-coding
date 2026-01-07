import 'dotenv/config';
import * as express from 'express';
import session from './session';
import { handleGetAccessToken, handleGetRequestToken } from '@/lib/zaim/oauth_controller';

const router = express.Router();
router.use(session);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (_req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

// OAuth認証用のエンドポイント
router.get('/zaim/oauth/request_token', handleGetRequestToken); // POSTにしたいが、OAuthの仕様上GETにしている
router.get('/zaim/oauth/access_token', handleGetAccessToken); // POSTにしたいが、OAuthの仕様上GETにしている

const app: express.Express = express();
app.use(router);

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;