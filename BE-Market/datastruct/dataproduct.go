package datastruct

import (
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

type Response struct {
	Status  int      `json:"status"`
	Message string   `json:"message"`
	Data    []Produk `json:"data"`
}
