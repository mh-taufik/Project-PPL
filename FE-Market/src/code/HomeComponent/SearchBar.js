import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchBar = () => {
  const [search, setSearch] = React.useState('');
  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([
    {label: 'Dilihat Terbanyak', value: 1},
    {label: 'Terjual Terbanyak', value: 2},
    {label: 'Harga Tertinggi', value: 3},
    {label: 'Harga Terendah', value: 4},
    {label: 'Terbaru', value: 5},
  ]);

// <<<<<<< HEAD
//     return (
//         <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
//                 <View style={{flexDirection:'row'}}>
//                     <TextInput
//                         placeholder='Search'
//                         style={style.bar}
//                         onChangeText={setSearch}
//                         value={search}
//                     />
//                     <View>
//                         <View>
//                             <TouchableOpacity onPress={()=> {navigation.navigate("Result", {key: search})}}>
//                                 <Image 
//                                 style={style.button}
//                                 source={require("../../icon/search-bar.png")}
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>
//             <View style={{flexDirection: 'row', top: 2,right:10}}>
//                 <Image source={require('../../icon/filter.png')} style={{width: 24, height: 30}}/>
//                 <Text style={style.textBlue}>Filter</Text>
//             </View>
// =======
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder=" Search"
          style={style.bar}
          onChangeText={setSearch}
          value={search}
        />
        <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Result', {key: userInput});
              }}>
              <Image
                style={style.button}
                source={require('../../icon/search-bar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', top: 2, right: 10, width: 98}}>
        <Image
          source={require('../../icon/filter.png')}
          style={{width: 23, height: 22, left: -5, top: 4}}
        />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Filter"
          placeholderStyle={{color: '#0C8EFF'}}
          style={style.DropDown}
          listItemLabelStyle={{
            color: '#000',
            fontSize: 10,
          }}
          selectedItemContainerStyle={{
            backgroundColor: '#47aaff',
            //'#7ac1ff'
          }}
          textStyle={{
            fontSize: 10,
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
// <<<<<<< HEAD
//     bar: {
//         color: '#868787',
//         fontSize: 12,
//         right:5,
//         width: 280,
//         height: 33,
//         borderColor: 'gray',
//         borderRadius: 10,
//         borderWidth: 1,
//         paddingRight:38,
//         paddingLeft:10
//     },
//     textBlue: {
//         color: '#0C8EFF',
//         left:2,
//         fontSize: 15,
//         top: 5,
//     },
//     button : {
//         width: 23,
//         height: 19,
//         right:18,
//         top: 6,
//         position:'absolute'
//     },
//     // textSearch: {
//     //     color: '#868787',
//     //     fontSize: 12,
//     //     top: 4,
//     //     left: 10,
//     // }
// })
// =======
  bar: {
    color: '#868787',
    fontSize: 12,
    right: 10,
    //left:1,
    width: 230,
    height: 33,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    paddingRight: 38,
    paddingLeft: 10,
  },
  textBlue: {
    color: '#0C8EFF',
    left: 2,
    fontSize: 15,
    top: 5,
  },

  button: {
    width: 23,
    height: 19,
    right: 18,
    top: 6,
    position: 'absolute',
  },

  DropDown: {
    color: '#868787',
    //width : 130,
    height: 30,
    fontSize: 2,
    left: -2,
    top: -1,
    //right:1,
    borderColor: 'gray',
    placeholder: 'Filter',
  },

  // textSearch: {
  //     color: '#868787',
  //     fontSize: 12,
  //     top: 4,
  //     left: 10,
  // }
});

export default SearchBar;