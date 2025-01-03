package main

import (
	"fmt"
)

func FizzBuzz(i int) string {

	switch {
	case i%3 == 0 && i%5 == 0:
		return "FizzBuzz"
	case i%3 == 0:
		return "Fizz"
	case i%5 == 0:
		return "Buzz"
	default:
		return fmt.Sprintf("%d", i)
	}

}

func main() {
	for i := 0; i <= 100; i++ {
		fmt.Println(FizzBuzz(i))
	}
}
