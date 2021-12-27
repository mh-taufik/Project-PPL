import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

const SearchBar = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', top: '-5%'}}>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                    placeholder="Search"
                    placeholderTextColor="gray"
                    style={style.bar}
                    />
                    <View>
                        <Image source={require('../../icon/search-bar.png')}
                        style={{width: 23, height: 19, right:18, top: 6, position:'absolute'}}/>
                    </View>
                </View>
        </View>
    )
} 

const style = StyleSheet.create({
    bar: {
        color: '#868787',
        fontSize: 13,
        left: '20%',
        width: '96%',
        height: '70%',
        borderColor: '#868787',
        borderRadius: 10,
        borderWidth: 2,
    },
    textBlue: {
        color: '#0C8EFF',
        left: '1%',
        fontSize: 15,
        top: '10%',
    },
    iconSearch: {
        width: '8%', 
        height: '40%',
        left: '82%',
        top: '15%',
        position:'absolute'
    }
})

export default SearchBar;