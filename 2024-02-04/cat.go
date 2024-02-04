package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func validate_parameter(args []string) bool {
	return len(args) == 2
}

func read_file(filename string) (string, error) {
	file, err := os.Open(filename)
	if err != nil {
		return "", err
	}
	defer file.Close()
	var contents []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		contents = append(contents, scanner.Text())
	}
	return strings.Join(contents, "\n"), nil

}

func print_content(content string) {
	fmt.Println(content)
}

func main() {

	if is_valid := validate_parameter(os.Args); !is_valid {
		fmt.Fprintf(os.Stderr, "Error: args length is invalid.\n")
		os.Exit(1)
	}
	if file_content, err := read_file(os.Args[1]); err == nil {
		print_content(file_content)
	}
}
