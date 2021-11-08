package config

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

//Koneksi ke database
func CreateConnection() *sql.DB{
	//load .env file
	err := godotenv.Load(".env")
	if err != nil{
		log.Fatalf("Error loading .env file")
	}

	//membuka koneksi ke database
	db,err := sql.Open("postgres", os.Getenv("POSTGRES_URL"))
	if err !=nil{
		panic(err)
	}

	//cek koneksi
	err = db.Ping()
	
	if err != nil{
		panic(err)
	}

	fmt.Println("Berhasil terhubung ke database")
	
	return db
}

type NullString struct{
	sql.NullString
}

func (s NullString) MarshalJSON() ([]byte,error){
	if !s.Valid{
		return []byte("null"),nil
	}
	return json.Marshal(s.String)
}

func (s *NullString) UnmarshalJSON(data	[]byte) error{
	if string(data) == "null" {
		s.String, s.Valid = "", false
		return nil
	}
	s.String, s.Valid = string(data), true
	return nil
}