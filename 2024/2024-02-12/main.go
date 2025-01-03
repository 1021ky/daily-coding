package main

import "fmt"

func main() {
	// bubble sort
	var target []int = []int{1, 5, 6, 2, 1, 4, 222, 154, 22}
	for outer_index := 0; outer_index < len(target); outer_index++ {
		for inner_index := outer_index + 1; inner_index < len(target); inner_index++ {
			if target[outer_index] > target[inner_index] {
				target[outer_index], target[inner_index] = target[inner_index], target[outer_index]
			}
		}
	}
	fmt.Println(target)
}
