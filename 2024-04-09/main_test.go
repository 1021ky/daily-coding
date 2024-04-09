package main

import (
	"testing"
)

func TestFizzBuzz(t *testing.T) {
	if FizzBuzz(3) != "Fizz" {
		t.Errorf("Expected Fizz, but got %s", FizzBuzz(3))
	}
	if FizzBuzz(5) != "Buzz" {
		t.Errorf("Expected Buzz, but got %s", FizzBuzz(5))
	}
	if FizzBuzz(15) != "FizzBuzz" {
		t.Errorf("Expected FizzBuzz, but got %s", FizzBuzz(15))
	}
	if FizzBuzz(2) != "2" {
		t.Errorf("Expected 2, but got %s", FizzBuzz(2))
	}
}
