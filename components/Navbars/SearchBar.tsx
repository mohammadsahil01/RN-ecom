import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import { selectCart } from '../../src/redux/CartSlice'
import Icon1 from "react-native-vector-icons/AntDesign"

type SearchBarProps = {
  navigation: any;
};


const SearchBar = ({navigation}: SearchBarProps) => {
  const cart = useSelector(selectCart);
  return (
    <View style={styles.con1}>
      <Pressable onPress={()=>navigation.navigate("Home2")}>
      <Icon1 name='arrowleft' style={[styles.cartIcon,{paddingRight:7}]} size={25} color={"black"} ></Icon1>
      </Pressable>
      <Icon2 style={styles.searchIcon} name='search-outline' size={25} color={"black"} ></Icon2>
      <TextInput
        placeholderTextColor="black"
        style={styles.input}
        placeholder="Search"
      />
      
      <Pressable onPress={()=>navigation.navigate("Cart")}>
      <View style={{flexDirection:"row"}}>
      <Icon3 name='shopping-cart' style={styles.cartIcon} size={25} color={"black"} ></Icon3>
      {cart.length>0 &&<Text style={styles.cartText}> {cart.length}</Text>}
      </View>
      </Pressable>
      
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    con1 :{
        flexDirection:"row",
        paddingTop:20,
        paddingLeft:15,
        paddingBottom:5,
        backgroundColor:"#8cdddc"
    },
    input: {
        height: 45,
        marginBottom: 10,
        paddingHorizontal: 8,
        backgroundColor:"white",
        width: '66%',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        marginRight:10,
        
      },
      searchIcon:{
        marginBottom:10,
        paddingTop:10,
        paddingLeft:10,
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
      },
      cartIcon:{
          marginTop:10
      },
        cartText: {
        position:"relative",
        bottom:5,
        right:5,
        color:"black",
        fontSize:20,
        marginRight:-5,
      }
})