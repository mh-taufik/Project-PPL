package router

import (
	"accessdata1/controller"

	"github.com/gorilla/mux"
)

func Router() *mux.Router{
	router := mux.NewRouter()

	router.HandleFunc("/api/products", controller.AmbilSemuaProduct).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/products/{id}", controller.AmbilProduct).Methods("GET", "OPTIONS")

	return router
}