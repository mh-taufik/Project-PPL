import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function ButtonSearch () {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate("Result")}>
                <Image 
                  style={style.button}
                  source={require("../../icon/search-bar.png")}
                />
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({
  button : {
    width: 23,
    height: 19,
    right:18,
    top: 6,
    position:'absolute'
  }
})

export default ButtonSearch;
// button: {
//   backgroundColor: '#859a9b',
//   borderRadius: 20,
//   padding: 10,
//   marginBottom: 20,
//   shadowColor: '#303838',
//   shadowOffset: { width: 0, height: 5 },
//   shadowRadius: 10,
//   shadowOpacity: 0.35,
// },