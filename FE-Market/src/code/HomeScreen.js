import React from 'react'
import {View, StyleSheet} from 'react-native'
import Header from './HomeComponent/Header'
import SearchBar from './HomeComponent/SearchBar'
import ShowingList from './HomeComponent/Showinglist'
import Navbar from './navbar'
import { NavigationContainer } from '@react-navigation/native';


const HomeScreen = () => {

  return (
    <View style={style.page}>
      <Header/>
      <SearchBar/>
      <View style={{top: 10}}>
        <ShowingList/>
      </View>
      <View >
        <Navbar/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: 700,
    flexDirection: 'column'
  }
})

export default HomeScreen;