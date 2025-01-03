// シンプルなHTTPサーバー
// つくって、壊して、直して学ぶ Kubernetes入門(https://www.shoeisha.co.jp/book/detail/9784798183961) 1.3章のコードを写経
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello World!\n")
	})

	log.Println("start server on 8080 port")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
