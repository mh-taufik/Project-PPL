import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const size = Dimensions.get('window').height/5-25;
// const imageHeight =
// const imageWidth = Dimensions.get('screen').width;

const MenuBar = () => {
    return (
        <View style={style.menu}>
            {/* <Image source={require('../icon/container.png')} style={style.container}/> */}
            <View>
                <Image source={require('../../icon/feeds.png')} style={style.feed}/>
                <Text style={style.textFeed}>Feed</Text>
            </View>
            <View>
                <Image source={require('../../icon/search.png')} style={style.search}/>
                <Text style={style.textSearch}>Search</Text>
            </View>
            <View>
                <Image source={require('../../icon/logo.png')} style={style.logo}/>
            </View>
            <View>
                <Image source={require('../../icon/safety.png')} style={style.safety}/>
                <Text style={style.textSafety}>Safety</Text>
            </View>
            <View>
                <Image source={require('../../icon/profile.png')} style={style.profile}/>
                <Text style={style.textProfile}>Profile</Text>
            </View>
        </View>
        /* </View> 
            <View style={style.logoContainer}>
                <Image source={require('../icon/feeds.png')} style={style.feed}/>
                <Image source={require('../icon/search.png')} style={style.search}/>
                <Image source={require('../icon/logo.png')} style={style.logo}/>
                <Image source={require('../icon/safety.png')} style={style.safety}/>
                <Image source={require('../icon/profile.png')} style={style.profile}/>
            </View>
            <View style={style.textContainer}>
                <Text style={style.textFeed}>Feed</Text>
                <Text style={style.textSearch}>Search</Text>
                <Text style={style.textSafety}>Safety</Text>
                <Text style={style.textProfile}>Profile</Text>
            </View> */
    )
}

const style = StyleSheet.create({
    menu: {
        backgroundColor: 'blue',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        top: '-13%',
    },
    logoContainer: {
        alignContent: "space-between",
        left: '-10%'
    },
    feed: {
        position: "absolute",
        width: size,
        height: size,
        left: 25,
        top: 6
    }, 
    search: {
        position: "absolute",
        width: size,
        height: 36,
        left: 94.73,
        top: 6
    },
    logo: {
        position: "absolute",
        width: 56.66,
        height: 59,
        left: 152,
    },
    safety: {
        position: "absolute",
        width: 35,
        height: 36,
        left: 233.51,
        top: 6
    },
    profile: {
        position: "absolute",
        width: 35,
        height: 36,
        left: 300.8,
        top: 7
    },
    textFeed: {
        position: "absolute",
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#9E9E9E',
        left: 28,
        top: 40,
    },
    textSearch: {
        position: "absolute",
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#3EA5FF',
        left: 92,
        top: 40,
    },
    textSafety: {
        position: "absolute",
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#9E9E9E',
        left: 233,
        top: 40,
    },
    textProfile: {
        position: "absolute",
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#9E9E9E',
        left: 301,
        top: 40,
    },
})

export default MenuBar;