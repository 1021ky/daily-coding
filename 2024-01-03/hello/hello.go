package main

import (
	"fmt"

	"rsc.io/quote"
)
func main() {
    fmt.Println("Hello, World!")
	fmt.Println(quote.Go())
	fmt.Println("following number is 2 cubed")
	result := 1
	for i := 0; i < 3; i++ {
		result = result * 2
	}
	fmt.Println(result)
	if result != 10 {
		fmt.Println("previous number is not 10.")
	}
	switch result {
	case 1:
		fmt.Println("previous number is 1.")
	case 8:
		fmt.Println("previous number is 8.")
	}
}