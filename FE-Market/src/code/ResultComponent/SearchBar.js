import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

const SearchBar = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', top: '-8%'}}>
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
            <View style={{flexDirection: 'row', top: 2,right:10}}>
                <Image source={require('../../icon/filter.png')} style={{width: 24, height: 30}}/>
                <Text style={style.textBlue}>Filter</Text>
            </View>
        </View>
    )
} 

const style = StyleSheet.create({
    bar: {
        color: '#868787',
        fontSize: 13,
        left: '20%',
        width: '88%',
        height: '70%',
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 2
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