// See https://aka.ms/new-console-template for more information
string FizzBuzz(int n) {
    string result = "";
    if (n % 3 != 0 && n % 5 != 0) {
        return n.ToString();
    }
    if (n % 3 == 0) {
        result = result + "Fizz";
    }
    if (n % 5 == 0) {
        result = result + "Buzz";
    }
    return result;
}

for (int i=0;i<20;i++) {
    Console.WriteLine(FizzBuzz(i+1));
}

