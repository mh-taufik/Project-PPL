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
	Data    []models.Buku `json:"data"`
}

//Adding data buku
func TambahBuku(w http.ResponseWriter, r *http.Request){
	// create an empty user of type models.User
	// kita buat empty buku dengan tipe models.Buku
	var buku models.Buku
	err := json.NewDecoder(r.Body).Decode(&buku)

	if err!=nil{
		log.Fatalf("Gagal decode request body. %v", err)
	}

	//memanggil model lalu insert buku
	insertID := models.TambahBuku(buku)

	//format response objectnya
	res := response{
		ID : insertID,
		Message: "Data buku berhasil ditambahkan",
	}

	//kirim response 
	json.NewEncoder(w).Encode(res)

}

//Ambil buku berdasarkan paramater id
func AmbilBuku(w http.ResponseWriter, r *http.Request){
	//Set Header
	w.Header().Set("Context-type","application/x-www-form-urlencoded")
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
	buku, err := models.AmbilBuku(int64(id))

	if err != nil {
		log.Fatalf("Gagal mengambil data buku. %v", err)
	}

	// kirim response
	json.NewEncoder(w).Encode(buku)
}

//Mengambil data semua buku
func AmbilSemuaBuku(w http.ResponseWriter, r *http.Request){
	// kita set headernya
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	//memanggil semua buku
	bukus, err := models.AmbilSemuaBuku()

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
func UpdateBuku(w http.ResponseWriter, r *http.Request) {

	// kita ambil request parameter idnya
	params := mux.Vars(r)

	// konversikan ke int yang sebelumnya adalah string
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		log.Fatalf("Gagal mengubah data string ke int.  %v", err)
	}

	// buat variable buku dengan type models.Buku
	var buku models.Buku

	// decode json request ke variable buku
	err = json.NewDecoder(r.Body).Decode(&buku)

	if err != nil {
		log.Fatalf("Tidak bisa decode request body.  %v", err)
	}

	// panggil updatebuku untuk mengupdate data
	updatedRows := models.UpdateBuku(int64(id), buku)

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
func HapusBuku(w http.ResponseWriter, r *http.Request){
		// kita ambil request parameter idnya
		params := mux.Vars(r)

		// konversikan ke int yang sebelumnya adalah string
		id, err := strconv.Atoi(params["id"])

		if err != nil{
			log.Fatalf("Gagal mengkonversi data string ke int %v", err)
		}
		// panggil fungsi hapusbuku , dan convert int ke int64
		deletedRows := models.HapusBuku(int64(id))

		// ini adalah format message berupa string
		msg := fmt.Sprintf("Data buku berhasil dihapus. Total data yang dihapus %v", deletedRows)

		res := response{
			ID : int64(id),
			Message: msg,
		}
		// send the response
	json.NewEncoder(w).Encode(res)
}