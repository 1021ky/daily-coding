package main

import "fmt"

// とりあえず書いてみたバブルソート
func bubbleSort(param []int) []int {
	target := make([]int, len(param))
	copy(target, param)
	for i := 0; i < len(target); i++ {
		for k := i; k < len(target); k++ {
			if target[i] > target[k] {
				tmp := target[i]
				target[i] = target[k]
				target[k] = tmp
			}
		}
	}
	return target
}

// goの文法を活かして書いてみたバブルソート
func sortWithBubble(param []int) []int {
	target := make([]int, len(param))
	copy(target, param)
	n := len(target)
	for i := 0; i < n; i++ {
		for j := 0; j < n-i-1; j++ {
			if target[j] > target[j+1] {
				target[j], target[j+1] = target[j+1], target[j]
			}
		}
	}
	return target
}

func main() {
	param := []int{5, 2, 11, 7, 3, 13}
	result := bubbleSort(param)
	fmt.Println(result)
	expected := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(expected)

	param = []int{5, 2, 11, 7, 3, 13}
	result = sortWithBubble(param)
	fmt.Println(result)
	expected = [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(expected)
}
