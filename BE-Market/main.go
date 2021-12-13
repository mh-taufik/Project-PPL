package main

import (
	"BE-Market/config"
	"fmt"
	"strconv"

	"github.com/gofiber/fiber"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Products struct {
	Id_produk        int     `json:"id_produk"`
	Nama_produk      string  `json:"nama_produk"`
	Deskripsi_produk string  `json:"deskripsi_produk"`
	Stok             int     `json:"stok"`
	Harga_produk     float32 `json:"harga_produk"`
	Rating_produk    float32 `json:"rating_produk"`
	Jumlah_terjual   int     `json:"jumlah_terjual"`
	Jumlah_dilihat   int     `json:"jumlah_dilihat"`
}
var DB *gorm.DB

func main() {
	var err error
    p := config.Config("DB_PORT")
    port, err := strconv.ParseUint(p, 10, 32)
	// Connection URL to connect to Postgres Database
    dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", config.Config("DB_HOST"), port, config.Config("DB_USER"), config.Config("DB_PASSWORD"), config.Config("DB_NAME"))
    // Connect to the DB and initialize the DB variable
    DB, err = gorm.Open(postgres.Open(dsn))

	if err != nil {
		panic("Could not connect to the database")
	}

	app := fiber.New()

	app.Get("/api/products/backend",func(c *fiber.Ctx)error {
		var products []Products

		sql := "SELECT * FROM products"

		if s := c.Query("s"); s != "" {
			sql = fmt.Sprintf("%s WHERE title LIKE '%%%s%%' OR description LIKE '%%%s%%'", sql, s, s)
		}

		if sort := c.Query("sort"); sort != "" {
			sql = fmt.Sprintf("%s ORDER BY price %s", sql, sort)
		}

		page, _ := strconv.Atoi(c.Query("page", "1"))
		perPage := 9
		var total int64

		DB.Raw(sql).Count(&total)

		sql = fmt.Sprintf("%s LIMIT %d OFFSET %d", sql, perPage, (page-1)*perPage)

		DB.Raw(sql).Scan(&products)

		return c.JSON(fiber.Map{
			"data":      products,
		})
	})

	app.Listen(":8000")
}