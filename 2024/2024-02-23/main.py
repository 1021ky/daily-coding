import unittest
import requests
import json


class GraphQLClient:

    def __init__(self, endpoint: str) -> None:
        self._endpoint = endpoint

    def get_schema(self) -> dict:
        schema_query = {"query": "{ __schema { types { name } } }"}
        response = requests.post(url=self._endpoint, json=schema_query)
        return response.json()

    def get_input_field_schema(self, target: str) -> dict:
        query_param = f"""
        {{
            __type(name: "{target}") {{
                name
                inputFields {{
                    name
                    type {{
                        name
                        kind
                        ofType {{
                            name
                            kind
                        }}
                    }}
                }}
            }}
        }}
        """
        schema_query = {"query": query_param}
        response = requests.post(url=self._endpoint, json=schema_query)
        print(json.dumps(response.json(), indent=2))
        return response.json()


class TestGraphQLClient(unittest.TestCase):

    def test_get_schema(self):
        client = GraphQLClient("https://countries.trevorblades.com")
        actual = client.get_schema()
        self.assertIn("data", actual.keys())
        self.assertIn("__schema", actual["data"].keys())
        self.assertIn("types", actual["data"]["__schema"].keys())

    def test_get_input_field_schema(self):
        client = GraphQLClient("https://countries.trevorblades.com")
        actual = client.get_input_field_schema("CountryFilterInput")
        self.assertIn("data", actual.keys())
        self.assertIn("__type", actual["data"].keys())
        self.assertIn("name", actual["data"]["__type"].keys())
        self.assertIn("inputFields", actual["data"]["__type"].keys())


if __name__ == "__main__":
    unittest.main()
