package main

import (
	"fmt"

	"github.com/1021ky/daily-coding/2025-03-01/greetings"
)

func main() {
	// Get a greeting message and print it.
	message := greetings.Hello("Gladys")
	fmt.Println(message)
}
