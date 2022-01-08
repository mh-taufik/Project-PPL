import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const { useState } = React;

const SearchBar = ({selectedValue, chageValue}) => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: 'Dilihat Terbanyak', value: 1 },
    { label: 'Terjual Terbanyak', value: 2 },
    { label: 'Harga Tertinggi', value: 3 },
    { label: 'Harga Terendah', value: 4 },
    { label: 'Terbaru', value: 5 },
  ]);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Search"
          style={style.bar}
          onChangeText={setSearch}
          value={search}
        />
        <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Result', { key: userInput });
              }}>
              <Image
                style={style.button}
                source={require('../../icon/search-bar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', top: 2, right: 10, width: 98 }}>
        <Image
          source={require('../../icon/filter.png')}
          style={{ width: 23, height: 22, left: -5, top: 4 }}
        />
        <DropDownPicker
          open={open}
          value={selectedValue}
          items={items}
          setOpen={setOpen}
          setValue={chageValue}
          setItems={setItems}
          placeholder="Filter"
          placeholderStyle={{ color: '#0C8EFF' }}
          style={style.DropDown}

          listItemLabelStyle={{
            color: '#000',
            fontSize: 10,
          }}

          selectedItemContainerStyle={{
            backgroundColor: '#47aaff',
          }}

          textStyle={{
            fontSize: 10,
          }}

          onChangeValue={(value) => {
            return value;
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  bar: {
    color: '#868787',
    fontSize: 12,
    right: 10,
    width: 230,
    height: 33,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    paddingRight: 38,
    paddingLeft: 10,
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
    height: 30,
    fontSize: 2,
    left: -2,
    top: -1,
    borderColor: 'gray',
    placeholder: 'Filter',
  },
  
});

export default SearchBar;
