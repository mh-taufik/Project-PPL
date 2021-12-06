import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from './code/Header'
import MenuBar from './code/MenuBar'
import SearchBar from './code/SearchBar'
import ShowingList from './code/Showinglist'


const App = () => {
  return (
    <View style={style.page}>
      <Header/>
      <SearchBar/>
      <ShowingList/>
        <Text >ADADADAD</Text>
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

export default App;