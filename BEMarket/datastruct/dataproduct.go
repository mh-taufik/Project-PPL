package datastruct

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)


type Products struct {
	Id_produk     int  
	Nama_produk   string 
	Deskripsi_produk string 
    Stok             int 
    Harga_produk     float32 
    Rating_produk    float32 
    Jumlah_terjual   int 
    Jumlah_dilihat   int 
}

func ShowAllProduct() ([]Products, error) {
	var products []Products
	db,err := sql.Open("postgres","postgres://postgres:lamindah21@localhost/Market?sslmode=disable")
	if err !=nil{
		panic(err)
	}

	//cek koneksi
	err = db.Ping()
	
	if err != nil{
		panic(err)
	}

	fmt.Println("Berhasil terhubung ke database")
	
    //Select Query
	sqlStatement := `SELECT * FROM products`

	//eksesuki query
	rows, err := db.Query(sqlStatement)

	if err != nil {
		log.Fatalf("Gagal mengeksekusi query %v", err)
	}

	//menutup eksekusi dari query
	defer rows.Close()

	// iterasi mengambil data
	for rows.Next() {
		var product Products

		// kita ambil datanya dan unmarshal ke structnya
		err = rows.Scan(&product.Id_produk, &product.Nama_produk, &product.Deskripsi_produk, &product.Stok, &product.Harga_produk, &product.Rating_produk,
			&product.Jumlah_terjual, &product.Jumlah_dilihat)

		if err != nil {
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}

		// memasukkan ke slice bukus
		products = append(products, product)
	}
	return products, err
}
