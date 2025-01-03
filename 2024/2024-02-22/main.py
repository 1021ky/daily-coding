import unittest
import requests


class GraphQLClient:

    def __init__(self, endpoint: str) -> None:
        self._endpoint = endpoint

    def get_schema(self) -> dict:
        headers = {"Content-Type": "application/json"}
        schema_query = {"query": "{ __schema { types { name } } }"}
        response = requests.post(url=self._endpoint, json=schema_query, headers=headers)
        return response.json()


class TestGraphQLClient(unittest.TestCase):

    def test_client_get(self):
        client = GraphQLClient("https://countries.trevorblades.com")
        actual = client.get_schema()
        self.assertIn("data", actual.keys())
        self.assertIn("__schema", actual["data"].keys())
        self.assertIn("types", actual["data"]["__schema"].keys())


if __name__ == "__main__":
    unittest.main()
