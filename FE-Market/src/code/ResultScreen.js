import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from './ResultComponent/Header'
import SearchBar from './ResultComponent/SearchBar'
import ShowingList from './ResultComponent/Showinglist'
import Navbar from './navbar'


const ResultScreen = ({ route }) => {
  const { key } = route.params;
  var kata = JSON.stringify(key);
  var result = kata.substring(1,kata.length-1);

  // untuk check saja 
  // console.log("sebelum: ", kata);
  // console.log("sesudah: ", result);

  return (
    <View style={style.page}>
      <Header/>
      <SearchBar/>
      <View style={{top: 10}}>
        {/* <ShowingList params={result}/> */}
      </View>
      <View>
        <Navbar/>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: 700,
  }
})

export default ResultScreen;