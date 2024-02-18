import pytest
import requests
from unittest.mock import MagicMock, Mock
from app.api_client import APIClient


class TestAPIClient:

    normal_json_data = {
        "latitude": 52.52,
        "longitude": 13.419998,
        "generationtime_ms": 0.00095367431640625,
        "utc_offset_seconds": 0,
        "timezone": "GMT",
        "timezone_abbreviation": "GMT",
        "elevation": 38.0,
    }

    @pytest.fixture
    def session_cls_mock(self, request):
        status_code, json_data = request.param
        mock_session_cls = MagicMock(spec=requests.Session)
        mock_session = Mock()
        # APIから返ってくる値
        mock_session.get.return_value = json_data
        mock_session_cls.__new__.return_value = mock_session
        return mock_session_cls

    @pytest.mark.parametrize(
        "session_cls_mock", [(200, normal_json_data)], indirect=True
    )
    def test_send_request(self, session_cls_mock):
        params = {
            "latitude": 52.52,
            "longitude": 13.41,
        }
        client = APIClient("test_endpoint", session_cls_mock)
        actual_status_code, actual_json_data = client.send_request(params)
        assert actual_status_code, 200
        assert actual_json_data, self.normal_json_data
