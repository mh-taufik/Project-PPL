package service

import (
	"BEMarket/datastruct"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)
type Response struct {
	Status  int           `json:"status"`
	Message string        `json:"message"`
	Data    []datastruct.Products `json:"data"`
}


func DataProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Great !!! we are connected to a browser\n")
	if r.Method != "GET" {
		http.Error(w, http.StatusText(404), http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// memanggil models AmbilSemuaBuku
	products, err := datastruct.ShowAllProduct();

	if err != nil {
		log.Fatalf("Tidak bisa mengambil data. %v", err)
	}

	var response Response
	response.Status = 1
	response.Message = "Success"
	response.Data = products

	// kirim semua response
	json.NewEncoder(w).Encode(response)
}	
	
	
	// rows, err := db.Query("SELECT * FROM products")

	// if err != nil {
	// 	http.Error(w, http.StatusText(500), http.StatusInternalServerError)
	// 	return
	// }
	// defer rows.Close()

	// allProducts := make([]Products, 0)

	// for rows.Next() {
	// 	product := Products{}
	// 	err := rows.Scan(&product.Id_produk, &product.Nama_produk, &product.Deskripsi_produk, &product.Stok, &product.Harga_produk, &product.Rating_produk,
	// 	&product.Jumlah_terjual, &product.Jumlah_dilihat)
	// 	if err != nil {
	// 		log.Println(err)
	// 		http.Error(w, http.StatusText(500), 500)
	// 		return
	// 	}
	// 	allProducts = append(allProducts, product)
	// }
	// if err = rows.Err(); err != nil {
	// 	http.Error(w, http.StatusText(500), 500)
	// 	return
	// }

	// for _, product := range allProducts {
	// 	fmt.Fprintf(w, "%d %s %s %d %f %f %d %d \n", product.Id_produk, product.Nama_produk, product.Deskripsi_produk, product.Stok, product.Harga_produk,
	// 	product.Rating_produk, product.Jumlah_terjual, product.Jumlah_dilihat)
	// }
