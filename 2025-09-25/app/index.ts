import 'dotenv/config';
import session from './session';
import * as express from 'express';
import { handlePostAccessToken as handleGetAccessToken, handlePostRequestToken as handleGetRequestToken } from '@/lib/zaim/oauth/controller';

const router: express.Router = express.Router();
router.use(session);

router.get('/', (_req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

// OAuth認証用のエンドポイント
router.get('/zaim/oauth/request_token', handleGetRequestToken); // POSTにしたいが、OAuthの仕様上GETにしている
router.get('/zaim/oauth/access_token', handleGetAccessToken); // POSTにしたいが、OAuthの仕様上GETにしている

const app: express.Express = express();
app.use(router);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
export default app;