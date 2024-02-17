import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Navbar = () => {
  return (
    <View style={styles.con1}>
      <Image style={styles.tinyLogo} source={{uri:"https://cdn-icons-png.flaticon.com/128/4024/4024609.png"}}
      />
      <Icon name="shopping-bag" size={23} color={"black"} style={styles.tinyLogo2} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    con1 :{
        flexDirection:"row",
        padding:20,
        justifyContent:"space-between"
    },
    tinyLogo: {
        width: 50,
        height: 50
      },
      tinyLogo2: {
        marginBottom:15,
        padding:12,
        backgroundColor:'#cbcbcb',
        borderRadius:10
      }

})