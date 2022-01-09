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
            <View style={style.option}>
                <View  style={style.TextOptions}>
                    <Text style={{left: 20,borderBottomWidth: 2,borderBottomColor: '#0C8EFF'}}>Terlaris</Text>
                </View>
                <View  style={style.TextOptions}>
                    <Text style={{left : 60,borderBottomWidth: 2,borderBottomColor: '#868787'}}>Terbaru</Text>
                </View>
                <View  style={style.TextOptions}>
                    <Text style={{left: 100,borderBottomWidth: 2,borderBottomColor: '#868787'}}>Tertinggi</Text>
                </View>
                <View  style={style.TextOptions}>
                    <Text style={{left: 140,borderBottomWidth: 2,borderBottomColor: '#868787'}}>Terendah</Text>
                </View> 
             </View> 
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
    option:{
        flexDirection: 'row',
        top : 79
    },
})

export default Header;