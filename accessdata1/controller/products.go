package controller

import (
	"accessdata1/models"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type Response struct {
	Status  int           `json:"status"`
	Message string        `json:"message"`
	Data    []models.Products `json:"data"`
}

//Ambil buku berdasarkan paramater id
func AmbilProduct(w http.ResponseWriter, r *http.Request){
	//Set Header
	w.Header().Set("Context-Type","application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin","*")

	//dapatkan idbuku dari parameter request, keynya adalah "id"
	params	:= mux.Vars(r)

	//konversi id ke int dari string
	id, err := strconv.Atoi(params["id"])
	
	//warning gagal convert
	if err != nil {
		log.Fatalf("Gagal convert string ke integer.  %v", err)
	}
	// memanggil models ambilsatubuku dengan parameter id yg nantinya akan mengambil single data
	product, err := models.AmbilProduct(int64(id))

	if err != nil {
		log.Fatalf("Gagal mengambil data buku. %v", err)
	}

	// kirim response
	json.NewEncoder(w).Encode(product)
}

//Mengambil data semua buku
func AmbilSemuaProduct(w http.ResponseWriter, r *http.Request){
	// kita set headernya
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	//memanggil semua buku
	bukus, err := models.AmbilSemuaProduct()

	if err != nil{
		log.Fatalf("Gagal mengambil data %v", err)
	}

	var response Response
	response.Status = 1
	response.Message = "Sukses"
	response.Data = bukus

	// kirim semua response
	json.NewEncoder(w).Encode(response)
}
