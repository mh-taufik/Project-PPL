package transport

import (
	"BE-Market/service"

	"github.com/gorilla/mux"
)
func Router() *mux.Router {
	r := mux.NewRouter()
	// r.HandleFunc("/postingan/{id}/{end}", dataRecord)

	r.HandleFunc("/produk", service.DataProduct)
	r.HandleFunc("/produk/rekomendasi/{nama}", service.Recommend)
	r.HandleFunc("/produk/search/{nama}", service.Search)

	return r;
	
}
