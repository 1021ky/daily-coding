# https://peps.python.org/pep-3333/
import socket


class WSGIServer:
    def __init__(self, wsgi_app) -> None:
        self._app = wsgi_app

    def handle_request(self, client_connection):
        def start_response(status, response_headers, exc_info=None):
            ...

        headers_set = [200, {"sample_header": "sample"}]
        result = self._app(environ, start_response)
        response = "HTTP/1.1 {status}\r\n".format(status=headers_set[0])
        for header in headers_set[1]:
            response += "{0}: {1}\r\n".format(*header)
        response += "\r\n"
        for data in result:
            response += data.decode("utf-8")
        client_connection.sendall(response.encode("utf-8"))

    def serve_forever(self):
        listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        listen_socket.bind(("", 8000))
        listen_socket.listen(1)
        print("Serving on port 8000...")
        while True:
            client_connection, client_address = listen_socket.accept()
            self.handle_request(client_connection)
            client_connection.close()


if __name__ == "__main__":
    from wsgi_app import AppClass

    headers_set = []
    environ = {}
    server = WSGIServer(AppClass)
    server.serve_forever()
