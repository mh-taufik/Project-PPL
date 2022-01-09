import * as React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
    const [search, setSearch] = React.useState('');
    const navigation = useNavigation();

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        placeholder='Search'
                        style={style.bar}
                        onChangeText={setSearch}
                        value={search}
                    />
                    <View>
                        <View>
                            <TouchableOpacity onPress={()=> {navigation.navigate("Result", {key: search})}}>
                                <Image 
                                style={style.button}
                                source={require("../../icon/search-bar.png")}
                                />
                            </TouchableOpacity>
                        </View>
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
        fontSize: 12,
        right:5,
        width: 312,
        height: 33,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        paddingRight:38,
        paddingLeft:10
    },
    textBlue: {
        color: '#0C8EFF',
        left:2,
        fontSize: 15,
        top: 5,
    },
    button : {
        width: 23,
        height: 19,
        right:18,
        top: 6,
        position:'absolute'
    },
    // textSearch: {
    //     color: '#868787',
    //     fontSize: 12,
    //     top: 4,
    //     left: 10,
    // }
})

export default SearchBar;