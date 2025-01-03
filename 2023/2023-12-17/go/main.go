package main

import (
	"fmt"
	"os"
)

func main()  {
	fmt.Println("hello world!")
	fmt.Fprintln(os.Stdout, "Hello world!")
	fmt.Fprintln(os.Stderr, "Hello world!")

	val := fmt.Sprintf("%s %s\n", "Hello", "world!")
	fmt.Print(val)

	fmt.Printf("%s %s\n", "Hello", "world!")
}