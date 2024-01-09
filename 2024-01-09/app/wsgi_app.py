# https://peps.python.org/pep-3333/

HELLO_WORLD = b"hello world"


class AppClass:
    def __init__(self, environ, start_response):
        self.environ = environ
        self.start = start_response

    def __iter__(self):
        status = "200 OK"
        response_headers = [("Content-type", "text/plain")]
        self.start(status, response_headers)
        yield HELLO_WORLD
