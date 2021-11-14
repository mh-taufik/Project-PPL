package transport

import (
	"BEMarket/service"
	"net/http"
)
func Router() {
	http.HandleFunc("/products",service.DataProduct);
}