import React from 'react';
import { Image, StyleSheet, Text, View, ViewComponent } from 'react-native';

const Header = () => {
    return (
        <View style={{height: 90}}>
            <View style={style.header}>
                <Image source={require('../../icon/mail.png')} style={style.mail}/>
                <Text style={style.tittle}>Search</Text>
            </View>
            <View style={style.option}>
                <View  style={style.squareGray}>
                    <Image source={require('../../icon/friend.png')} style={style.icon}/>
                    <Text style={style.textGray}>Friend</Text>
                </View>
                <View  style={style.squareGray}>
                    <Image source={require('../../icon/forum.png')} style={style.icon}/>
                    <Text style={style.textGray}>Forum</Text>
                </View>
                <View  style={style.squareGray}>
                    <Image source={require('../../icon/event.png')} style={style.icon}/>
                    <Text style={style.textGray}>Event</Text>
                </View>
                <View  style={style.squareBlue}>
                    <Image source={require('../../icon/market.png')} style={style.icon}/>
                    <Text style={style.textBlue}>Market</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create ({
    header: {
        top: 10,
        flexDirection: 'row',
        height: 40,
    },
    tittle: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 18,
    },
    mail: {
        position: 'absolute',
        width: 28,
        height: 24,
        left: 323
    },
    option: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: 10,
    },
    squareGray: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F0F2F5',
        borderRadius: 4,
        width: 80,
        height: 25,
    },
    squareBlue: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0C8EFF',
        borderRadius: 4,
        width: 80,
        height: 25,
    },
    icon: {
        width: 25,
        height: 20,
    },
    textGray: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#868787',
        top: 3,
    },
    textBlue: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'white',
        top: 3
    },
})

export default Header;