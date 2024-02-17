import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'
import { selectCart } from '../../src/redux/CartSlice'

type SearchBarProps = {
  navigation: any; // You can replace 'any' with the actual navigation prop type
};


const CartNav = ({navigation}: SearchBarProps) => {
  const cart = useSelector(selectCart);
  return (
    <View style={styles.con1}>
      
      <Pressable onPress={()=>navigation.goBack()}>
      <Icon3 name='arrowleft' style={styles.cartIcon} size={25} color={"black"} ></Icon3>
      </Pressable>
      
    </View>
  )
}

export default CartNav;

const styles = StyleSheet.create({
    con1 :{
        flexDirection:"row",
        paddingTop:20,
        paddingLeft:20,
        paddingBottom:5,
        backgroundColor:"#8cdddc"
    },
      cartIcon:{
          marginBottom:10
      }
})