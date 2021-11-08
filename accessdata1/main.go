package main

import (
	"accessdata1/router"
	"fmt"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	// fs := http.FileServer(http.Dir("build"))
	// http.Handle("/", fs)
	fmt.Println("Server dijalankan pada port 5432....")

	log.Fatal(http.ListenAndServe(":5432",r))
}