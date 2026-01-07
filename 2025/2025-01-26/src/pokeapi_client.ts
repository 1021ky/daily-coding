import * as https from 'https';

interface RequestOptions {
    port?: number;
    path?: string;
    method?: string;
    headers?: Record<string, string>
}

export class HttpClient {
    constructor(private hostname: string, private options: RequestOptions) {}

    public async get(): Promise<void> {
        return this.request({ ...this.options, method: 'GET', path: this.options.path || '/', port: 443, headers: { 'Content-Type': 'application/json' } });
    }

    public async post(): Promise<void> {
        return this.request({ ...this.options, method: 'POST', path: this.options.path || '/', port: 443, headers: { 'Content-Type': 'application/json' } });
    }

    private async request(options: RequestOptions): Promise<void> {
        return new Promise((resolve, reject) => {
            const req = https.request({ ...options, hostname: this.hostname }, (res) => {
                let data = '';
                // https.request実行時のイベントハンドラ.dataイベントのとき.
                res.on('data', (chunk) => {
                    data += chunk;
                });

                // https.request実行時のイベントハンドラ.response全部読んだとき
                res.on('end', () => {
                    try {
                        const json = JSON.parse(data);
                        resolve(json);
                    } catch (error) {
                        reject(error);
                    }
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end();
        });
    }
}

const options: RequestOptions = {
    path: '/api/v2/ability',
};

const ability_client = new HttpClient('pokeapi.co', options);
ability_client.get().then((res) => {
    console.log(res);
}).catch((error) => {
    console.error('GET request failed:', error);
});
