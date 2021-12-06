import axios from 'axios';
import React, { useEffect ,useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Produk from './Produk';

const ShowingList = () => {
    const [dataProduk, setDataProduk] = useState([]);
    const [jumlahDB, setJumlahDB] = useState(0);
    const getData = () => {
        axios.get('https://6151286fd0a7c10017016906.mockapi.io/Products').then(res => {
            setJumlahDB(Object.keys(res.data).length);
            setDataProduk(res.data);
        })
    }

    // return (
    //     <View style={{height: 500}}>
    //         <ScrollView contentContainerStyle={{paddingVertical: 10}}>
    //             {dataProduk.map(item => {
    //                 return <Produk
    //                 produkStok={item.stok}
    //                 produkImage={item.foto_produk} 
    //                 produkNama={item.nama_produk}
    //                 produkHarga={item.harga_produk}
    //                 produkRating={item.rating_produk}/>}
    //             )}
    //         </ScrollView>
    //     </View>
    // )

    return (
        <View>
            <FlatList
            numColumns={2}
            data={getData}
            keyExtractor={(item, index) => {
                return index.toString();
             }}
            renderItem={({ item }) => {
                return <Produk
                produkStok={item.stok}
                    produkImage={item.foto_produk} 
                    produkNama={item.nama_produk}
                    produkHarga={item.harga_produk}
                    produkRating={item.rating_produk}/>
             }}
            />
        </View>
    )
}

export default ShowingList;