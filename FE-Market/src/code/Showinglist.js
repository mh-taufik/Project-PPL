import axios from 'axios';
import React, { useEffect ,useState } from "react";
import { FlatList, View, Image, StyleSheet, Text } from "react-native";
import { makeStyles } from 'react-native-elements';

const ShowingList = () => {
    const [dataProduk, setDataProduk] = useState([]);
    // const [jumlahProduk, setJumlahProduk] = useState(0);
    
    useEffect(() => {
        getData();
    });

    const getData = () => {
        axios.get('https://6151286fd0a7c10017016906.mockapi.io/Products').then(res => 
        {
            // setJumlahDB(Object.keys(res.data).length);
            setDataProduk(res.data);
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
            numColumns={2}
            keyExtractor={( item ) => item.produk_id}
            data={dataProduk}
            renderItem={( item ) => (
                <View style={styles.container}>
                    <View style={styles.stok_wishlist}>
                        <Text style={styles.textBase}>Stok {item.stok}</Text>
                    </View>
                    <View>
                        <Image source={{uri:item.foto_produk}} style={styles.gambar}/>
                    </View>
                    <View>
                        <Text style={styles.nama}>{item.nama_produk}</Text>
                    </View>
                    <View style={styles.harga}>
                        <Text style={styles.textBlue}>{item.harga_produk}</Text>
                        <Image source={require('../icon/rating.png')} style={{width: 19, height: 19, left: 60}}/>
                        <Text style={styles.textRating}>{item.rating_produk}</Text>
                    </View>
                    {/* <Text style={styles.nama}>{item.nama_produk}</Text> */}
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    // container:{
    //     backgroundColor: 'black',
    //     height: '70%',
    //     width: '100%',
    //     top: '-5%'
    // },
    // nama: {
    //     fontSize: 20,
    //     fontStyle: 'normal',
    //     color: 'red',
    // }
    container: {
        alignItems: 'row',
        backgroundColor: 'black',
        height: '70%',
        width: '100%',
        top: '-5%'
    },
    cardProduk: {
        height: 220,
        width: 180,
        backgroundColor: 'black',
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

export default ShowingList;

/*
Items in database
-----------------
nama_produk
deskripsi_produk
stok
harga_produk
foto_produk
rating_produk
jumlah_terjual
jumlah_dilihat
 */