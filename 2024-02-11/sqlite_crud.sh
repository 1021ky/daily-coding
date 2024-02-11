DB=sample.db

sqlite3 $DB -echo "CREATE TABLE IF NOT EXISTS movie (year INTEGER, title TEXT, score REAL)"

sqlite3 $DB -echo "INSERT INTO movie VALUES (2024, 'the daily coding', 5.0)"
sqlite3 $DB -echo "INSERT INTO movie VALUES (2024, 'drinks while cooking', 4.0)"
sqlite3 $DB -echo "INSERT INTO movie VALUES (2024, 'folding cycle tour', 4.6)"
sqlite3 $DB -echo "INSERT INTO movie VALUES (2222, 'heaven', 5.0)"

sqlite3 $DB -echo "UPDATE movie SET year = 2020 WHERE title='drinks while cooking'"

sqlite3 $DB -echo "DELETE FROM movie WHERE year=2222"


output_formats=("ascii" "box" "column" "csv" "html" "json" "line" "list" "markdown" "quote" "table" "tabs")
SQL="SELECT * FROM movie"

for format in "${output_formats[@]}"
do
    echo "output format is $format\n"
    echo "----------------------------------"
    sqlite3 $DB -echo -$format "$SQL"
    echo "----------------------------------"
    echo "\n"
done

