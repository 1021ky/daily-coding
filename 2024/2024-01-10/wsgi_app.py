# https://peps.python.org/pep-3333/

from typing import Callable


HELLO_WORLD = b"hello world"


class AppClass:
    def __init__(self, environ, start_response: Callable):
        self._environ = environ
        self._start_response = start_response

    def __iter__(self):
        status = "200 OK"
        response_headers = [("Content-type", "text/plain")]
        self._start_response(status, response_headers)
        yield HELLO_WORLD
