output_formats=("ascii" "box" "column" "csv" "html" "json" "line" "list" "markdown" "quote" "table" "tabs")
SQL="SELECT 'HELLO WORLD'"

for format in "${output_formats[@]}"
do
    echo "output format is $format\n"
    echo "----------------------------------"
    sqlite3 sample.db -echo -$format "$SQL"
    echo "----------------------------------"
    echo "\n"
done
