package models

import (
	"accessdata1/config"
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq" // postgres golang driver
)

type Products struct {
	Id_produk     uint  `json:"id_produk"`
	Nama_produk   string `json:"nama_produk"`
	Deskripsi_produk string `json:"deskripsi_produk"`
    Stok             int `json:"stok"`
    Harga_produk     float32 `json:"harga_produk"`
    Rating_produk    float32 `json:"rating_produk"`
    Jumlah_terjual   int `json:"jumlah_terjual"`
    Jumlah_dilihat   int `json:"jumlah_dilihat"`
}



//Ambil buku
func AmbilSemuaProduct() ([]Products, error){
	//Koneksi ke database
	db := config.CreateConnection()

	//menutup koneksinya di akhir proses
	defer db.Close()
	
	var products []Products

	//Select Query
	sqlStatement := `SELECT * FROM products`

	//eksesuki query
	rows, err := db.Query(sqlStatement)

	if err != nil{
		log.Fatalf("Gagal mengeksekusi query %v", err)
	}

	//menutup eksekusi dari query
	defer rows.Close()

	// iterasi mengambil data
	for rows.Next(){
		var product Products

		// kita ambil datanya dan unmarshal ke structnya
		err = rows.Scan(&product.Id_produk, &product.Nama_produk, &product.Deskripsi_produk, &product.Stok, &product.Harga_produk, &product.Rating_produk,
		&product.Jumlah_terjual, &product.Jumlah_dilihat)

		if err != nil{
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}

		// memasukkan ke slice bukus
		products = append(products, product)
	}
	return products,err
}

//Ambil buku dengan id
func AmbilProduct(id int64) (Products, error){
		//Koneksi ke database
		db := config.CreateConnection()

		//menutup koneksinya di akhir proses
		defer db.Close()

		var product Products

		//membuat sql query untuk memanggil satu data buku
		sqlStatement := "SELECT * FROM products WHERE id_produk=$1"

		//eksekusi sql query
		row := db.QueryRow(sqlStatement,id)

		err := row.Scan(&product.Id_produk, &product.Nama_produk, &product.Deskripsi_produk, &product.Stok, &product.Harga_produk, &product.Rating_produk,
			&product.Jumlah_terjual, &product.Jumlah_dilihat)

		switch err{
		case sql.ErrNoRows:
			fmt.Println("Data yang dicari tidak ada")
			return product,nil
		case nil:
			return product, nil
		default:
			log.Fatalf("tidak bisa mengambil data. %v", err)
		}
	
		return product, err
}
