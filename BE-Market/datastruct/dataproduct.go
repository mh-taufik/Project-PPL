package datastruct

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)


type Produk struct {
	IdProduk        int     `json:"id_produk"`
	NamaProduk      string  `json:"nama_produk"`
	DeskripsiProduk string  `json:"deskripsi_produk"`
	FotoProduk      string  `json:"foto_produk"`
	Stok            int     `json:"stok"`
	HargaProduk     int     `json:"harga_produk"`
	RatingProduk    float32 `json:"rating_produk"`
	JumlahTerjual   int     `json:"jumlah_terjual"`
	JumlahDilihat   int     `json:"jumlah_dilihat"`
}

func ShowAllProduct() ([]Produk, error) {
	
	db,_ := sql.Open("postgres","postgres://postgres:lamindah21@localhost/Market?sslmode=disable")

	defer db.Close()
	fmt.Println("Berhasil terhubung ke database")

	var products []Produk
	
    //Select Query`
	sqlStatement := `SELECT * FROM produk`
	
type Products struct {
	Id_produk        int
	Nama_produk      string
	Deskripsi_produk string
	Stok             int
	Harga_produk     float32
	Rating_produk    float32
	Jumlah_terjual   int
	Jumlah_dilihat   int
}

func ShowAllProduct() ([]Products, error) {
	var products []Products
	db, err := sql.Open("postgres", "postgres://db_ppl:andromeda@103.157.96.115/db_standar?sslmode=disable")
	if err != nil {
		panic(err)
	}

	//cek koneksi
	err = db.Ping()

	if err != nil {
		panic(err)
	}

	fmt.Println("Berhasil terhubung ke database")

	//Select Query
	sqlStatement := `SELECT * FROM products`

	for rows.Next() {
		var Produks Produk

		// kita ambil datanya dan unmarshal ke structnya
		err = rows.Scan(&Produks.IdProduk, &Produks.NamaProduk, &Produks.DeskripsiProduk, &Produks.FotoProduk, &Produks.Stok,
			&Produks.HargaProduk, &Produks.RatingProduk, &Produks.JumlahTerjual, &Produks.JumlahDilihat)

		products = append(products, Produks)
	}
	return products, err
}
