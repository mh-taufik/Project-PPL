package models

import (
	"accessdata1/config"
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq" // postgres golang driver
)

type Buku struct {
	ID            int64  `json:"id"`
	Judul_Buku    string `json:"judul_buku"`
	Penulis       string `json:"penulis"`
	Tgl_publikasi string `json:"tgl_publikasi"`
}

//Adding Buku
func TambahBuku(buku Buku) int64 {
	//Koneksi ke database
	db := config.CreateConnection()

	//menutup koneksinya di akhir proses
	defer db.Close()
	
	//membuat insert query
	//mengembalikan nilai dari id dari buku yang dimasukkan ke db
	sqlStatement := `INSERT INTO buku (judul_buku, penulis, tgl_publikasi) VALUES ($1, $2, $3)
	RETURNING id`

	// id yang dimasukkan akan tersimpan pada variable id disini
	var id int64

	// Scan function akan menyimpan insert id didalam id id
	err := db.QueryRow(sqlStatement, buku.Judul_Buku, buku.Penulis, buku.Tgl_publikasi).Scan(&id)

	if err != nil{
		log.Fatalf("Gagal mengeksekusi query. %v", err)
	}

	fmt.Printf("Insert data %v",id)

	return id
}

//Ambil buku
func AmbilSemuaBuku() ([]Buku, error){
	//Koneksi ke database
	db := config.CreateConnection()

	//menutup koneksinya di akhir proses
	defer db.Close()
	
	var bukus []Buku

	//Select Query
	sqlStatement := `SELECT * FROM buku`

	//eksesuki query
	rows, err := db.Query(sqlStatement)

	if err != nil{
		log.Fatalf("Gagal mengeksekusi query %v", err)
	}

	//menutup eksekusi dari query
	defer rows.Close()

	// iterasi mengambil data
	for rows.Next(){
		var buku Buku

		// kita ambil datanya dan unmarshal ke structnya
		err = rows.Scan(&buku.ID, &buku.Judul_Buku, &buku.Penulis, &buku.Tgl_publikasi)

		if err != nil{
			log.Fatalf("Gagal mengeksekusi data %v", err)
		}

		// memasukkan ke slice bukus
		bukus = append(bukus, buku)
	}
	return bukus,err
}

//Ambil buku dengan id
func AmbilBuku(id int64) (Buku, error){
		//Koneksi ke database
		db := config.CreateConnection()

		//menutup koneksinya di akhir proses
		defer db.Close()

		var buku Buku

		//membuat sql query untuk memanggil satu data buku
		sqlStatement := "SELECT * FROM buku WHERE id=$1"

		//eksekusi sql query
		row := db.QueryRow(sqlStatement,id)

		err := row.Scan(&buku.ID, &buku.Judul_Buku, &buku.Penulis, &buku.Tgl_publikasi)

		switch err{
		case sql.ErrNoRows:
			fmt.Println("Data yang dicari tidak ada")
			return buku,nil
		case nil:
			return buku, nil
		default:
			log.Fatalf("tidak bisa mengambil data. %v", err)
		}
	
		return buku, err
}

//Update data buku pada database
func UpdateBuku(id int64, buku Buku)int64{
	//Koneksi ke database
	db := config.CreateConnection()

	//menutup koneksinya di akhir proses
	defer db.Close()

	//Query sql 
	sqlStatement := `UPDATE buku SET judul_buku=$2, penulis=$3, tgl_publikasi=$4 WHERE id=$1`

	//eksekusi sql 
	res, err := db.Exec(sqlStatement, id, buku.Judul_Buku, buku.Penulis, buku.Tgl_publikasi)
	
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
func HapusBuku(id int64) int64{
	// mengkoneksikan ke db postgres
	db := config.CreateConnection()

	// kita tutup koneksinya di akhir proses
	defer db.Close()

	//SQL query
	sqlStatement := `DELETE FROM buku WHERE id=$1`

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