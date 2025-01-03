import sqlite3


class SQLiteConnector:
    def __init__(self, db_name: str) -> None:
        self._connection = sqlite3.connect(db_name)

    @property
    def connection(self) -> sqlite3.Connection:
        return self._connection


class MovieTable:

    TABLE_NAME = "movie"

    def __init__(self, connection: sqlite3.Connection) -> None:
        self._connection = connection

    def init(self):
        cursor = self._connection.cursor()
        cursor.execute(f"DROP TABLE IF EXISTS {self.TABLE_NAME}")
        cursor.execute(f"CREATE TABLE {self.TABLE_NAME}(title, year, score)")

    def insert(self, title, year, score):
        cursor = self._connection.cursor()
        cursor.execute(
            f"INSERT INTO {self.TABLE_NAME} VALUES ('{title}', {year}, {score})"
        )

    def select_all(self):
        cursor = self._connection.cursor()
        cursor.execute(f"SELECT * FROM {self.TABLE_NAME}; )")


def init_db():
    connector = SQLiteConnector("202402027sample.db")
    table = MovieTable(connection=connector.connection)
    table.init()
