package main

import (
	"errors"
	"fmt"
)

type Queue struct {
	data []int
}

const maxQueueSize int = 5

func (q *Queue) Enqueue(item int) {
	if q.size() == maxQueueSize {
		q.data = q.data[1:]
	}
	q.data = append(q.data, item)
}

func (q *Queue) Dequeue() (int, error) {
	if q.size() == 0 {
		return 0, errors.New("empty")
	}
	item, data := q.data[0], q.data[1:]
	q.data = data
	return item, nil
}

func (q *Queue) IsEmpty() bool {
	return len(q.data) == 0
}

func (q *Queue) size() int {
	return len(q.data)
}

func main() {
	queue := &Queue{}
	fmt.Println(queue.data)
	queue.Enqueue(1)
	fmt.Println(queue.data)
	queue.Enqueue(2)
	fmt.Println(queue.data)
	queue.Enqueue(3)
	fmt.Println(queue.data)
	queue.Enqueue(4)
	fmt.Println(queue.data)
	queue.Enqueue(5)
	fmt.Println(queue.data)
	queue.Enqueue(6)
	fmt.Println(queue.data)
	fmt.Println(queue.Dequeue())
	fmt.Println(queue.data)
	fmt.Println(queue.Dequeue())
	fmt.Println(queue.data)
}