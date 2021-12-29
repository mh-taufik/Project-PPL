import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity} from 'react-native';

const Header = () => {
    return (
        <View>
            <TouchableOpacity onPress={()=> alert('mail')}>
                <Image 
                  style={style.button}
                  source={require("../../icon/mail.png")}
                />
            </TouchableOpacity>
        </View>
        // <View style={{height: 90,top:'4%'}}>
        //     <View style={style.header}>
        //         <Image source={require('../../icon/mail.png')} style={style.mail}/>
        //         {/* <Text style={style.tittle}>Result</Text> */}
        //     </View>
        // </View>
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
    },
    mail: {
        position: 'absolute',
        width: '9%',
        height: '80%',
        left: '90%'
    },
})

export default Header;