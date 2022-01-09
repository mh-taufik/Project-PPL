package service

import (
	"BE-Market/datastruct"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

var db *sql.DB

const (
	//sesuaikan dengan database lokal dulu, karena pada database online masih ada kendala pengaksesan lewat MicroService
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "sarah123"
	dbname   = "PPL"
)

func init() {
	dbsource := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	var err error

	db, err = sql.Open("postgres", dbsource)
	if err != nil {
		panic(err)
	}
	if err = db.Ping(); err != nil {
		panic(err)
	}
	fmt.Println("Now we are connected to POSTGRESQL DATABASE.")
}

func AllDataProduct(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, http.StatusText(404), http.StatusMethodNotAllowed)
		return
	}

	rows, err := db.Query("SELECT * FROM produk ORDER BY jumlah_dilihat DESC LIMIT 10")
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var dataProduk []datastruct.Produk

	for rows.Next() {
		var Produks datastruct.Produk

		err = rows.Scan(&Produks.IdProduk, &Produks.NamaProduk, &Produks.DeskripsiProduk, &Produks.FotoProduk, &Produks.Stok,
			&Produks.HargaProduk, &Produks.RatingProduk, &Produks.JumlahTerjual, &Produks.JumlahDilihat)

		if err != nil {
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}
		dataProduk = append(dataProduk, Produks)
	}

	if err != nil {
		log.Fatalf("Tidak bisa mengambil data. %v", err)
	}

	var response datastruct.Response
	response.Status = 1
	response.Message = "Success"
	response.Data = dataProduk

	// kirim semua response
	json.NewEncoder(w).Encode(response)
}

func Search(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	if r.Method != "GET" {
		http.Error(w, http.StatusText(404), http.StatusMethodNotAllowed)
		return
	}

	nama, ok := vars["nama"]
	if !ok {
		fmt.Println("Nama is missing in parameters") // belum pake status text(400/422(?))
	}

	sqlstatement := fmt.Sprintf("SELECT * FROM produk WHERE nama_produk ILIKE '%%%s%%'", nama)
	rows, err := db.Query(sqlstatement)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var dataProduk []datastruct.Produk

	for rows.Next() {
		var Produks datastruct.Produk

		err = rows.Scan(&Produks.IdProduk, &Produks.NamaProduk, &Produks.DeskripsiProduk, &Produks.FotoProduk, &Produks.Stok,
			&Produks.HargaProduk, &Produks.RatingProduk, &Produks.JumlahTerjual, &Produks.JumlahDilihat)

		if err != nil {
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}
		dataProduk = append(dataProduk, Produks)
	}

	if err = rows.Err(); err != nil {
		http.Error(w, http.StatusText(500), 500)
		return
	}

	var response datastruct.Response
	response.Status = 1
	response.Message = "Success"
	response.Data = dataProduk

	json.NewEncoder(w).Encode(response)
}

func Recommend(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	if r.Method != "GET" {
		http.Error(w, http.StatusText(404), http.StatusMethodNotAllowed)
		return
	}

	nama, ok := vars["nama"]
	if !ok {
		fmt.Println("Nama is missing in parameters") // belum pake status text(400/422(?))
	}

	sqlstatement := fmt.Sprintf("SELECT * FROM produk WHERE nama_produk ILIKE '%%%s%%' ORDER BY jumlah_dilihat DESC LIMIT 5", nama)
	rows, err := db.Query(sqlstatement)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var dataProduk []datastruct.Produk

	for rows.Next() {
		var Produks datastruct.Produk

		err = rows.Scan(&Produks.IdProduk, &Produks.NamaProduk, &Produks.DeskripsiProduk, &Produks.FotoProduk, &Produks.Stok,
			&Produks.HargaProduk, &Produks.RatingProduk, &Produks.JumlahTerjual, &Produks.JumlahDilihat)

		if err != nil {
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}
		dataProduk = append(dataProduk, Produks)
	}

	if err = rows.Err(); err != nil {
		http.Error(w, http.StatusText(500), 500)
		return
	}

	var response datastruct.Response
	response.Status = 1
	response.Message = "Success"
	response.Data = dataProduk

	json.NewEncoder(w).Encode(response)
}

func Filter(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	if r.Method != "GET" {
		http.Error(w, http.StatusText(404), http.StatusMethodNotAllowed)
		return
	}

	id, ok := vars["id"]
	if !ok {
		fmt.Println("Nama is missing in parameters")
	}

	var order string
	switch id {
	case "1":
		order = "ORDER BY jumlah_dilihat DESC"
	case "2":
		order = "ORDER BY jumlah_terjual DESC"
	case "3":
		order = "ORDER BY harga_produk DESC"
	case "4":
		order = "ORDER BY harga_produk ASC"
	case "5":
		order = "ORDER BY id_produk DESC"
	default:
		order = "ORDER BY id_produk ASC"
	}

	sqlstatement := fmt.Sprintf("SELECT * FROM produk %s LIMIT 10", order)
	rows, err := db.Query(sqlstatement)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var dataProduk []datastruct.Produk

	for rows.Next() {
		var Produks datastruct.Produk

		err = rows.Scan(&Produks.IdProduk, &Produks.NamaProduk, &Produks.DeskripsiProduk, &Produks.FotoProduk, &Produks.Stok,
			&Produks.HargaProduk, &Produks.RatingProduk, &Produks.JumlahTerjual, &Produks.JumlahDilihat)

		if err != nil {
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}
		dataProduk = append(dataProduk, Produks)
	}

	if err != nil {
		log.Fatalf("Tidak bisa mengambil data. %v", err)
	}

	var response datastruct.Response
	response.Status = 1
	response.Message = "Success"
	response.Data = dataProduk

	// kirim semua response
	json.NewEncoder(w).Encode(response)
}

