import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//https://6151286fd0a7c10017016906.mockapi.io/Products
//https://617d57c31eadc50017136488.mockapi.io/postingan

const Produk = ({produkStok,produkImage,produkNama,produkHarga,produkRating}) => {
    return (
        <View style={style.container}>
            <View style={style.cardProduk}>
                <View style={style.stok_wishlist}>
                    <Text style={style.textBase}>Stok {produkStok}</Text>
                    <Image source={require('../icon/unwish.png')} style={{width: 25, height: 25, left: 80}}/>
                </View>
                <View>
                    <Image source={{uri:produkImage}} style={style.gambar}/>
                </View>
                <View>
                    <Text style={style.nama}>{produkNama}</Text>
                </View>
                <View style={style.harga}>
                    <Text style={style.textBlue}>{produkHarga}</Text>
                    <Image source={require('../icon/rating.png')} style={{width: 19, height: 19, left: 60}}/>
                    <Text style={style.textRating}>{produkRating}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    cardProduk: {
        height: 220,
        width: 190,
        backgroundColor: 'white',
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        flexDirection: 'column'
    },
    stok_wishlist: {
        flexDirection: 'row'
    },
    harga: {
        top: 20,
        flexDirection: 'row'
    },
    gambar: {
        width: 150,
        height: 100,
    },
    nama: {
        fontSize: 12,
        color: 'black'
    },
    textBase: {
        color: 'black'
    },
    textBlue: {
        color: 'steelblue'
    },
    textRating: {
        color: 'black',
        left: 63,
    }
})

export default Produk;