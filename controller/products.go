package controller

import (
	"accessdata1/models"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type response struct {
	ID      int64  `json:"id,omitempty"`
	Message string `json:"message,omitempty"`
}

type Response struct {
	Status  int           `json:"status"`
	Message string        `json:"message"`
	Data    []models.Products `json:"data"`
}

//Adding data buku
func TambahProduct(w http.ResponseWriter, r *http.Request){
	// create an empty user of type models.User
	// kita buat empty buku dengan tipe models.Buku
	var product models.Products
	err := json.NewDecoder(r.Body).Decode(&product)

	if err!=nil{
		log.Fatalf("Gagal decode request body. %v", err)
	}

	//memanggil model lalu insert buku
	insertID := models.TambahProduct(product)

	//format response objectnya
	res := response{
		ID : insertID,
		Message: "Data buku berhasil ditambahkan",
	}

	//kirim response 
	json.NewEncoder(w).Encode(res)

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

//Update data buku pada table
func UpdateProduct(w http.ResponseWriter, r *http.Request) {

	// kita ambil request parameter idnya
	params := mux.Vars(r)

	// konversikan ke int yang sebelumnya adalah string
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		log.Fatalf("Gagal mengubah data string ke int.  %v", err)
	}

	// buat variable buku dengan type models.Buku
	var product models.Products

	// decode json request ke variable buku
	err = json.NewDecoder(r.Body).Decode(&product)

	if err != nil {
		log.Fatalf("Tidak bisa decode request body.  %v", err)
	}

	// panggil updatebuku untuk mengupdate data
	updatedRows := models.UpdateProduct(int64(id), product)

	// ini adalah format message berupa string
	msg := fmt.Sprintf("Buku telah berhasil diupdate. Jumlah yang diupdate %v rows/record", updatedRows)

	// ini adalah format response message
	res := response{
		ID:      int64(id),
		Message: msg,
	}

	// kirim berupa response
	json.NewEncoder(w).Encode(res)
}

//Menghapus data buku
func HapusProduct(w http.ResponseWriter, r *http.Request){
		// kita ambil request parameter idnya
		params := mux.Vars(r)

		// konversikan ke int yang sebelumnya adalah string
		id, err := strconv.Atoi(params["id"])

		if err != nil{
			log.Fatalf("Gagal mengkonversi data string ke int %v", err)
		}
		// panggil fungsi hapusbuku , dan convert int ke int64
		deletedRows := models.HapusProduct(int64(id))

		// ini adalah format message berupa string
		msg := fmt.Sprintf("Data buku berhasil dihapus. Total data yang dihapus %v", deletedRows)

		res := response{
			ID : int64(id),
			Message: msg,
		}
		// send the response
	json.NewEncoder(w).Encode(res)
}