import axios from 'axios';
import React, { useEffect ,useState } from "react";
import { FlatList, View, Image, StyleSheet, Text } from "react-native";

const ShowingList = (value) => {
    const [dataProduk, setDataProduk] = useState([]);
    
    useEffect(() => {
        getData(value.value);
    },[value]);

    const getData = (val) => {
        axios.get(`http://10.0.2.2:8080/produk/${val}`).then(res => {        
            setDataProduk(res.data.data);
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
            numColumns={2}
            keyExtractor={( item ) => item.produk_id}
            data={dataProduk}
            renderItem={({ item }) => (
                <View style={styles.cardProduk}>
                    <View style={styles.stok}>
                        <Text style={styles.textStok}>Stok {item.stok}</Text>
                    </View>
                    <View>
                        <Image source={{uri:item.foto_produk}} style={styles.gambar}/>
                    </View>
                    <View>
                        <Text style={styles.nama}>{item.nama_produk}</Text>
                    </View>
                    <View style={styles.keterangan}>
                        <Text style={styles.textHarga}>Rp.{item.harga_produk}</Text>
                        <Image source={require('../../icon/rating.png')} style={styles.ratingLogo}/>
                        <Text style={styles.textRating}>{item.rating_produk}</Text>
                    </View>
                    
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: '1%',
        backgroundColor: 'white',
        height: '85%',
        width: '100%',
    },
    cardProduk: {
        height: '90%',
        width: '48%',
        backgroundColor: 'white',
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        flexDirection: 'column'
    },
    stok: {
        top: -10
    },
    keterangan: {
        position: 'absolute',
        left: '10%',
        top: '108%',
        width: '100%',
    },
    ratingLogo: {
        position: 'absolute',
        left: '67%',
        width: 18,
        height: 18
    },
    gambar: {
        left: '10%',
        width: 80,
        height: 80,
    },
    nama: {
        fontSize: 8,
        color: 'black'
    },
    textStok: {
        color: 'black',
        fontSize: 10,
    },
    textHarga: {
        position: 'absolute',
        color: 'steelblue',
        fontSize: 12,
    },
    textRating: {
        color: 'gray',
        fontSize: 12,
        left: '80%',
    }
})

export default ShowingList;
