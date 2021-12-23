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
	
	//eksesuki query
	rows, err := db.Query(sqlStatement)

	if err != nil {
		log.Fatalf("Gagal mengeksekusi query %v", err)
	}

	//menutup eksekusi dari query
	defer rows.Close()

	// iterasi mengambil data
	for rows.Next() {
		var Produks Produk

		// kita ambil datanya dan unmarshal ke structnya
		err = rows.Scan(&Produks.IdProduk, &Produks.NamaProduk, &Produks.DeskripsiProduk, &Produks.FotoProduk, &Produks.Stok,
			&Produks.HargaProduk, &Produks.RatingProduk, &Produks.JumlahTerjual, &Produks.JumlahDilihat)

		if err != nil {
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}

		// memasukkan ke slice bukus
		products = append(products, Produks)
	}
	return products, err
}

