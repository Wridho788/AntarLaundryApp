import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive} from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLED } from '../../utils/constant'
const TabItem = ({isFocused, onPress, onLongPress, label}) =>{

    const Icon = () => {
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>

        if(label === "Pesanan") return isFocused ? <IconPesananActive/> : <IconPesanan/>

        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>

        return <Icon/>
    };

    return (
        <TouchableOpacity    
            onPress={onPress} 
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>
              {label}
            </Text>
          </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        marginTop: 8,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLED,
    })
})
export default TabItem;

