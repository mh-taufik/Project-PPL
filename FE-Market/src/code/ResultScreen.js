import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from './Header'
import MenuBar from './MenuBar'
import SearchBar from './SearchBar'
import Produk from './Produk'
import ShowingList from './Showinglist'


const ResultScreen = () => {
  return (
    <View style={style.page}>
      <Header/>
      <SearchBar/>
      <View style={{top: 10}}>
        <ShowingList/>
      </View>
      <View style={style.page}>
        <MenuBar/>
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