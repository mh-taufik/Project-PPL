import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import feeds from '../icons/feeds2.png';
import diamond from '../icons/diamond.png';
import button_tengah from '../icons/button_tengah.png';
import search from '../icons/search2.png';
import user from '../icons/user.png';

const Navbar = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.kotak}>
        <Image source={feeds} style={styles.icon} />
        <Text style={styles.teksFeed}>Feed</Text>
      </View>
      <View style={styles.kotak}>
        <Image source={search} style={styles.icon} />
        <Text style={styles.teksSearch}>Search</Text>
      </View>
      <View style={styles.kotak}>
        <Image source={button_tengah} style={styles.midButton} />
      </View>
      <View style={styles.kotak}>
        <Image source={diamond} style={styles.icon} />
        <Text style={styles.teksFeed}>Safety</Text>
      </View>
      <View style={styles.kotak}>
        <Image source={user} style={styles.icon} />
        <Text style={styles.teksFeed}>Profile</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  wrapper: {
    top: -95,
    height: 75,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    top: 18,
  },
  teksFeed: {
    color: '#868787',
    alignSelf: 'center',
    top: 18,
  },
  teksSearch: {
    color: '#0C8EFF',
    alignSelf: 'center',
    top: 18,
  },
  midButton: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    top: 2,
  },
  kotak: {
    width: '20%',
    height: '100%',
  },
});
