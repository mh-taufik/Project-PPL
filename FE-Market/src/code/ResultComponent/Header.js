import React from 'react';
import { Image, StyleSheet, Text, View, ViewComponent } from 'react-native';

const Header = () => {
    return (
        <View style={{height: 90}}>
            <View style={style.header}>
                <Image source={require('../../icon/back.png')} style={style.back} />
                <Image source={require('../../icon/mail.png')} style={style.mail}/>
                <Text style={style.tittle}>Result</Text>
            </View>
            {/* <View style={style.option}>
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
                </View> */}
            {/* </View> */}
        </View>
    )
}

const style = StyleSheet.create ({
    header: {
        flexDirection: 'row',
        height:'30%',
    },
    tittle: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 18,
        top : 11,
        left : 10
    },
    mail: {
        position: 'absolute',
        width: '9%',
        height: '80%',
        left: '90%',
        top : 11
    },
    back:{
        height : 30,
        width :'5%',
        top : 10,
        left : 7
    },
})

export default Header;