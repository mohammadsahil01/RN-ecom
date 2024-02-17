import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'

const Hero = () => {
  return (
    <View style={styles.con1}>
      <Text style={styles.text1}>Choose your new</Text>
      <Text style={styles.text2}>green friend</Text>
      <View style={styles.con2}>
      <Icon2 style={styles.searchIcon} name='search-outline' size={25} color={"black"} ></Icon2>
      <TextInput
        placeholderTextColor="black"
        style={styles.input}
        placeholder="Search"
      />
      <Icon name='filter' size={40} color={"black"} ></Icon>
      </View>
      
    
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
    con1:{
        padding:15,
        paddingTop:50
    },
    con2:{
        paddingTop:30,
        flexDirection:"row"
    },
    text1:{
        fontSize:30,
        color:"black"
    },
    text2:{
        fontSize:28,
        fontWeight:"700",
        color:"black"
    },
    input: {
        height: 45,
        marginBottom: 10,
        paddingHorizontal: 8,
        backgroundColor:"#cbcbcb",
        width: '75%',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        marginRight:10,
        
      },
      searchIcon:{
        marginBottom:10,
        paddingTop:10,
        paddingLeft:10,
        backgroundColor:"#cbcbcb",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
      }
})