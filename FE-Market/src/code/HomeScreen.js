import React from 'react'
import {View, StyleSheet} from 'react-native'
import Header from './HomeComponent/Header'
import SearchBar from './HomeComponent/SearchBar'
import ShowingList from './HomeComponent/Showinglist'
import Navbar from './navbar'

const HomeScreen = () => {
  return (
    <View style={style.page}>
      <Header/>
      <SearchBar/>
      <View style={{top: 10}}>
        <ShowingList/>
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

export default HomeScreen;