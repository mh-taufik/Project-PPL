// import React, {Component} from 'react';
// import { StyleSheet, Text, View, FlatList} from 'react-native';
// import {ListItem } from 'react-native-elements'
// import axios from 'axios';

// const ShowingList = () => {
//   constructor(props) {
//     super(props)
//     this.state = {
//         dataProduk: []
//     };
//   }
//   componentDidMount() {
//     axios.get('https://6151286fd0a7c10017016906.mockapi.io/Products')
//       .then(res => {
//         const dataProduk = res.data;
//         console.log(dataProduk);
//         this.setState({ dataProduk });
//       })
//   }

//   keyExtractor = (item, index) => index.toString()
//   renderItem = ({ user }) => (
//   <ListItem
//     produkStok={user.stok}
//     produkImage={user.foto_produk} 
//     produkNama={user.nama_produk}
//     produkHarga={user.harga_produk}
//     produkRating={user.rating_produk}
//   />
// )
//   render() {
//     return (
//         <View style={styles.container} >
//             <FlatList
//                keyExtractor={this.keyExtractor}
//                data={this.state.dataProduk}
//                renderItem={this.renderItem}
//              />
//        </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//        flex: 1,
//   },
//   txtHeader: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color:'#fff'
//   },
//   header: {
//     height:70,
//     backgroundColor:'brown',
//     justifyContent:'center',
//     alignItems:'center'
//   },
// });