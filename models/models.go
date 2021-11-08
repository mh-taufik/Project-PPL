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
		sqlStatement := "SELECT * FROM products WHERE id=$1"

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

//Update data buku pada database
func UpdateProduct(id int64, product Products)int64{
	//Koneksi ke database
	db := config.CreateConnection()

	//menutup koneksinya di akhir proses
	defer db.Close()

	//Query sql 
	sqlStatement := `UPDATE product SET nama_produk=$2, deskripsi_produk=$3, stok=$4, harga_produl=$5, rating_produk=$6, jumlah_produk=$7, jumlah_dilihat=$8  WHERE id_product=$1`

	//eksekusi sql 
	res, err := db.Exec(sqlStatement, product.Id_produk, product.Nama_produk, product.Deskripsi_produk, product.Stok, product.Harga_produk, product.Rating_produk,
		product.Jumlah_terjual, product.Jumlah_dilihat)
	
	if err != nil {
		log.Fatalf("Tidak bisa mengeksekusi query. %v", err)
	}

	// cek berapa banyak row/data yang diupdate
	rowsAffected, err := res.RowsAffected()

	if err != nil{
		log.Fatalf("Gagal mengeksekusi query. %v", err)
	}

	fmt.Printf("Total rows/record yang diupdate %v\n", rowsAffected)

	return rowsAffected
}

//Menghapus data buku
func HapusProduct(id int64) int64{
	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// kita tutup koneksinya di akhir proses
	defer db.Close()

	//SQL query
	sqlStatement := `DELETE FROM product WHERE id_product=$1`

	//eksekusi sql query
	res, err := db.Exec(sqlStatement, id)

	if err != nil{
		log.Fatalf("Gagal mengeksekusi query. %v", err)
	}

	// cek berapa jumlah data/row yang di hapus
	rowsAffected, err := res.RowsAffected()

	if err != nil {
		log.Fatalf("Data tidak dapat dicari. %v", err)
	}

	fmt.Printf("Total data yang terhapus %v", rowsAffected)

	return rowsAffected
}

//Adding Buku
func TambahProduct(product Products) int64 {
	//Koneksi ke database
	db := config.CreateConnection()

	//menutup koneksinya di akhir proses
	defer db.Close()
	
	//membuat insert query
	//mengembalikan nilai dari id dari buku yang dimasukkan ke db
	sqlStatement := `INSERT INTO buku (nama_produk, deskripsi_produk, stok, harga_produk, rating_produk, jumlah_terjual, jumlah_dilihat) 
	VALUES ($1, $2, $3,$4, $5, $6. $7)RETURNING id_produk`

	// id yang dimasukkan akan tersimpan pada variable id disini
	var id int64

	// Scan function akan menyimpan insert id didalam id id
	err := db.QueryRow(sqlStatement, product.Nama_produk, product.Deskripsi_produk, product.Stok, product.Harga_produk, product.Rating_produk,
		product.Jumlah_terjual, product.Jumlah_dilihat).Scan(&id)

	if err != nil{
		log.Fatalf("Gagal mengeksekusi query. %v", err)
	}

	fmt.Printf("Insert data %v",id)

	return id
}