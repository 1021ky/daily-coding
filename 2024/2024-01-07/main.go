package main

import (
	"fmt"
	"sync"
	"time"
)

// 引数で受け取った値の大きさだけ待つ。
func waitSleeping(item int, waitGroup *sync.WaitGroup, result chan<- int) {
	defer waitGroup.Done()
	if item < 0 {
		// 負の値のときは逆数を待つ時間とする
		duration := 1000 / float64(-item)
		time.Sleep(time.Duration(duration) * time.Microsecond)
	} else {
		time.Sleep(time.Duration(item*1000) * time.Microsecond)
	}
	result <- item
}

// 引数に受け取った配列をソートする。
func SleepSort(target []int) []int {
	var waitGroup sync.WaitGroup
	result_data := make(chan int, len(target))
	for i := 0; i < len(target); i++ {
		waitGroup.Add(1)
		go waitSleeping(target[i], &waitGroup, result_data)
	}
	waitGroup.Wait()
	close(result_data)
	var result []int
	for item := range result_data {
		result = append(result, item)
	}
	return result
}

func main() {
	target := []int{3, 1, 2, 5, 4, 20000, -14}
	result := SleepSort(target)
	fmt.Println(result)
}
