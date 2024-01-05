package main

import (
	"errors"
	"fmt"
)

type Queue struct{
	data []int
}

func (q *Queue) IsEmpty() bool {
	return len(q.data) == 0
}

func (q *Queue) Dequeue() (int, error) {
	if q.IsEmpty() {
		return 0, errors.New("empty")
	}
	item, data := q.data[0], q.data[1:]
	q.data = data
	return item, nil
}

func (q *Queue) Enqueue(item int) {
	q.data = append(q.data, item)
}

func main(){
	queue := &Queue{}
	fmt.Println(queue.data)
	queue.Enqueue(10)
	queue.Enqueue(20)
	queue.Enqueue(30)
	fmt.Println(queue.data)

	item, _ := queue.Dequeue()
	fmt.Println(item)
	fmt.Println(queue.data)
	item, _ = queue.Dequeue()
	fmt.Println(item)
	fmt.Println(queue.data)
}
