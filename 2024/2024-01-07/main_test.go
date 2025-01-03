package main

import (
	"reflect"
	"testing"
)

func TestSleepSort(t *testing.T) {
	tests := []struct {
		name string
		args []int
		want []int
	}{
		{
			name: "Test正常系 正の値しかないケース",
			args: []int{3, 1, 2, 5, 4, 200, -14},
			want: []int{-14, 1, 2, 3, 4, 5, 200},
		},
		{
			name: "Test正常系 負の値があるケース",
			args: []int{-234, 3, 120, 2, 5, 4, 100, -14},
			want: []int{-234, -14, 2, 3, 4, 5, 100, 120},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := SleepSort(tt.args); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("SleepSort() = %v, want %v", got, tt.want)
			}
		})
	}
}
