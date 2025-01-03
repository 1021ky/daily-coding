import requests
from typing import Type


class APIClient:

    def __init__(self, endpoint: str, session_cls: Type[requests.Session]) -> None:
        self._endpoint = endpoint
        self._session_cls = session_cls

    @property
    def _session(self) -> requests.Session:
        session = self._session_cls()
        return session

    def send_request(self, params: dict):
        with self._session as session:
            response = session.get(url=self._endpoint, params=params)
        return response.status_code, response.json()


if __name__ == "__main__":
    import requests

    client = APIClient("https://api.open-meteo.com/v1/forecast", requests.Session)

    latitude = 52.52
    longitude = 13.41

    params = {
        "latitude": latitude,
        "longitude": longitude,
    }

    status_code, data = client.send_request(params=params)

    print(status_code)
    print(data)
