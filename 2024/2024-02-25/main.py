from dataclasses import dataclass
import requests
import unittest
import json
from enum import StrEnum


class GraphQLOperand(StrEnum):
    EQ = "eq"
    NE = "ne"
    IN = "in"
    NIN = "nin"
    REGREX = "regex"
    GLOB = "glob"


@dataclass(frozen=True)
class GraphQLParam:
    operand: GraphQLOperand
    value: str

    @property
    def asdict(self):
        return {self.operand, self.value}


@dataclass(frozen=True)
class CountryFilterInputQuery:
    code: GraphQLParam
    continent: GraphQLParam
    currency: GraphQLParam
    name: GraphQLParam

    @property
    def asdict(self):
        return {
            "code": self.code.asdict,
            "continent": self.continent.asdict,
            "currency": self.currency.asdict,
            "name": self.name.asdict,
        }


class GraphQLClient:

    def __init__(self, endpoint: str) -> None:
        self._endpoint = endpoint

    def _post(self, query: dict):
        response = requests.post(url=self._endpoint, json=query)
        print(json.dumps(response.json(), indent=2))
        return response.json()

    def get_input_field_schema(self, name):
        query = f"""
        {{
            __type(name: "{name}") {{
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
        schema_query = {"query": query}
        return self._post(query=schema_query)

    def query_country_filter_input(self, query: CountryFilterInputQuery):
        param = f"""
        {{
            country(filter: {{
                {query.asdict}
            }}) {{
                name
                code
            }}
        }}
        """
        schema_query = {"query": param}
        return self._post(query=schema_query)


class TestClientClass(unittest.TestCase):

    def setUp(self) -> None:
        self._client = GraphQLClient("https://countries.trevorblades.com")
        return super().setUp()

    def test_get_input_field_schema(self):
        query = CountryFilterInputQuery(
            code=GraphQLParam(operand=GraphQLOperand.IN, value="Japan"),
            continent=GraphQLParam(operand=GraphQLOperand.IN, value=""),
            currency=GraphQLParam(operand=GraphQLOperand.IN, value=""),
            name=GraphQLParam(operand=GraphQLOperand.IN, value=""),
        )
        _ = self._client.query_country_filter_input(query=query)
        # self.assertIn("data", actual.keys())
        # self.assertIn("__type", actual["data"].keys())
        # self.assertIn("name", actual["data"]["__type"].keys())
        # self.assertIn("inputFields", actual["data"]["__type"].keys())

    def test_query_country_filter_input(self):
        actual = self._client.get_input_field_schema("CountryFilterInput")
        self.assertIn("data", actual.keys())
        self.assertIn("__type", actual["data"].keys())
        self.assertIn("name", actual["data"]["__type"].keys())
        self.assertIn("inputFields", actual["data"]["__type"].keys())


if __name__ == "__main__":
    unittest.main()
