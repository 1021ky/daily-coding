wsgiサーバーを実装しようとした。

```zsh
> python wsgi_server.py
Status: 200 OK
Content-type: text/plain

hello world
```
と標準出力するだけ。

HTTPのやり取りをするにはこれだけでは足りない。
socketライブラリを使った、HTTPのリクエストを受け取り、レスポンスを返す処理が追加で必要になるようだ。

copilotが言っていた。明日確かめてみよう。

```
PythonのWSGIサーバーを実装を勉強のために1から実装したいんだ。ただ、今のままだと標準出力をするだけなので、HTTPのやり取りをするようにしたい。どうすればいい？
```

```
PythonでWSGIサーバーをゼロから実装する場合、基本的には以下のステップが必要です：

ソケットを作成して特定のポートで待ち受ける
クライアントからの接続を受け入れる
HTTPリクエストを読み込む
WSGIアプリケーションを呼び出してレスポンスを取得する
HTTPレスポンスをクライアントに送信する
接続を閉じる
以下に、これらのステップを実装したサンプルコードを示します：
```

```python

import socket
from wsgiref.handlers import format_date_time
from datetime import datetime
from time import mktime

def application(environ, start_response):
    headers = [('Content-type', 'text/plain; charset=utf-8')]
    start_response('200 OK', headers)
    return [b"Hello World!"]

def start_response(status, response_headers, exc_info=None):
    server_headers = [
        ('Date', format_date_time(mktime(datetime.now().timetuple()))),
        ('Server', 'WSGIServer 0.2'),
    ]
    headers_set[:] = [status, response_headers + server_headers]

def handle_request(client_connection):
    request_data = client_connection.recv(1024)
    # Parse the request data here and set environ variables
    # ...

    result = application(environ, start_response)
    response = 'HTTP/1.1 {status}\r\n'.format(status=headers_set[0])
    for header in headers_set[1]:
        response += '{0}: {1}\r\n'.format(*header)
    response += '\r\n'
    for data in result:
        response += data.decode('utf-8')
    client_connection.sendall(response.encode('utf-8'))

def serve_forever():
    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    listen_socket.bind(('', 8000))
    listen_socket.listen(1)
    print('Serving on port 8000...')
    while True:
        client_connection, client_address = listen_socket.accept()
        handle_request(client_connection)
        client_connection.close()

if __name__ == '__main__':
    headers_set = []
    environ = {}
    serve_forever()
```