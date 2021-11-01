import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SearchBar = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={style.bar}>
                <Text style={style.textGray}>Search</Text>
                <Image source={require('../icon/search-bar.png')} style={{width: 23, height: 19, left: 200, top: 6}}/>
            </View>
            <View style={{flexDirection: 'row', top: 5}}>
                <Image source={require('../icon/filter.png')} style={{width: 24, height: 26}}/>
                <Text style={style.textBlue}>Filter</Text>
            </View>
        </View>
    )
} 

const style = StyleSheet.create({
    bar: {
        width: 280,
        height: 33,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
    },
    textBlue: {
        color: '#0C8EFF',
        fontSize: 13,
        top: 5,
    },
    textGray: {
        color: '#868787',
        fontSize: 12,
        top: 6,
        left: 10,
    }
})

export default SearchBar;