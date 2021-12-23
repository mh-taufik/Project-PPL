import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
//import colors from '../../assets/colors/colors'
import RouterSearch from './routerSearch/index'

const Search = () => {
    return (
    <View style={{flexDirection: 'row',marginTop:33,backgroundColor:'white'}}>
        <View>
          <Text style={style.header}>Search</Text>
        </View>
        <View>
          <Image 
          source={require('../../assets/images/mail.png')}
          style={{marginLeft:305,width:30,height:24}}/>
        </View>
        <View>
          <NavigationContainer>
            <RouterSearch/>
          </NavigationContainer>  
        </View>
    </View>
    )
}
 const style = StyleSheet.create({
   header: {
     fontFamily:'roboto',
     marginLeft:9,
     fontSize:19,
     color:'black',

   }
 })

 /*const ListTabs=() =>{
   colors.gray
 }*/

export default Search

const styles = StyleSheet.create({})
