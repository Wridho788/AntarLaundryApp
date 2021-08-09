import React, {useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Logo, SplashBackground } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            {/* <Image source={Logo} style={styles.logo} /> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 222,
        height: 105
    }
})

export default Splash;