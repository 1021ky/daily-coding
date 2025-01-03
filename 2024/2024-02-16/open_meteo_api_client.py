import requests
from api_client import APIClient
from dataclasses import dataclass
import datetime


@dataclass(frozen=True)
class ForecastQuery:
    latitude: float
    longitude: float

    @property
    def param(self):
        return {
            "latitude": self.latitude,
            "longitude": self.longitude,
        }


@dataclass(frozen=True)
class Forecast:
    latitude: float
    longitude: float
    generationtime_ms: float
    utc_offset_seconds: int
    timezone: datetime.timezone
    timezone_abbreviation: datetime.timezone
    elevation: float


@dataclass(frozen=True)
class ForecastResponse:
    status_code: int
    _raw_data: dict

    @property
    def forecast(self) -> Forecast:
        return Forecast(
            latitude=float(self._raw_data.get("latitude", 0.0)),
            longitude=float(self._raw_data.get("longitude", 0.0)),
            generationtime_ms=float(self._raw_data.get("generationtime_ms", 0.0)),
            utc_offset_seconds=self._raw_data.get("utc_offset_seconds", 0),
            timezone=self._raw_data.get("timezone", ""),
            timezone_abbreviation=self._raw_data.get("timezone_abbreviation", ""),
            elevation=self._raw_data.get("elevation", 0.0),
        )


class OpenMeteoForecastAPIClient:

    ENDPOINT = "https://api.open-meteo.com/v1/forecast"

    def __init__(self) -> None:
        self._client = APIClient(self.ENDPOINT, requests.Session)

    def get_forecast(self, query: ForecastQuery):
        status_code, response = self._client.send_request(query.param)
        return ForecastResponse(status_code=status_code, _raw_data=response)


if __name__ == "__main__":
    client = OpenMeteoForecastAPIClient()
    query = ForecastQuery(latitude=52.52, longitude=13.41)
    resoponse = client.get_forecast(query=query)
    print(resoponse)
