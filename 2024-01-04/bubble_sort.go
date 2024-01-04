package main

import "fmt"

func main(){
	param := [6]int{5, 2, 11, 7, 3, 13}
	expected := [6]int{2, 3, 5, 7, 11, 13}
	for i := 0; i < len(param); i++ {
		for k := i; k < len(param); k++ {
			if param[i] > param[k] {
				tmp := param[i]
				param[i] = param[k]
				param[k] = tmp
			}
		}
	}
	fmt.Println(param)
	fmt.Println(expected)
}