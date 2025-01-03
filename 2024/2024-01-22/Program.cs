// LINQ practice
int[] scores = { 97, 92, 81, 60 };

// Define the query expression.
IEnumerable<int> scoreQuery =
    from score in scores
    where score > 80
    select score;

// Execute the query.
foreach (int i in scoreQuery)
{
    Console.Write(i + " ");
}

Console.WriteLine();

foreach (int score in scores)
{
    if (score > 80)
    {
        Console.Write(score + " ");
    }
}
Console.WriteLine();
