import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from './ResultComponent/Header'
import SearchBar from './ResultComponent/SearchBar'
import ShowingList from './ResultComponent/Showinglist'
import Navbar from './navbar'


const ResultScreen = () => {
  return (
    <View style={style.page}>
      {/* <SearchBar/> */}
      <View style={{top: 10}}>
        <ShowingList/>
      </View>
      <View style={style.page}>
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