import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from './ResultComponent/Header'
import MenuBar from './ResultComponent/MenuBar'
import SearchBar from './ResultComponent/SearchBar'
import ShowingList from './ResultComponent/Showinglist'


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