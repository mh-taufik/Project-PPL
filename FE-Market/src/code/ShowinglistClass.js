import React, { Component, useEffect ,useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Produk from './Produk';


export default class ShowingList extends Component {
    State = {
        data: []
    };

    ComponentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        // const response = await fetch("https://6151286fd0a7c10017016906.mockapi.io/Products");
        const response = await fetch("localhost:8080/products");
        const json = await response.json();
        this.setState({data: json.data})
        // this.setState({data: json.results})
    }

    render() {
        return (
            <View style={{height: 500}}>
                <FlatList data={this.State.data}
                    keyExtractor={(x,i) => i}
                    numColumns={2}
                    renderItem={({ item }) => 
                        <Produk
                        produkStok={item.Stok}
                        produkImage={item.Foto_produk} 
                        produkNama={item.Nama_produk}
                        produkHarga={item.Harga_produk}
                        produkRating={item.Rating_produk}/>
                    }
                />
            </View>
        )
    }
}