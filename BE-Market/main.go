package main

import (
	"BE-Market/transport"
	"net/http"
	"os"

	"github.com/go-kit/log"
)

func main() {
	logger := log.NewLogfmtLogger(os.Stdout)
	r := transport.Router()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	logger.Log("listening-on", port)

	if err := http.ListenAndServe(":"+port, r); err != nil {
		logger.Log("listen.error", err)
	}
}
