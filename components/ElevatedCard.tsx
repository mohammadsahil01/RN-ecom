import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
        <Text style={styles.text}>Elevated Card</Text>
    <ScrollView horizontal >
        <View style={styles.card}>
            <Text style={{fontSize:33}}>😁</Text>
        </View>
        <View style={styles.card}>
            <Text style={{fontSize:33}}>😎</Text>
        </View>
        <View style={styles.card}>
            <Text style={{fontSize:33}}>😊</Text>
        </View>
        <View style={styles.card}>
            <Text style={{fontSize:33}}>😍</Text>
        </View>
        
    </ScrollView>
      
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    text:{
        color:"black",
        fontSize:20,
        padding:10
    },
    card:{
        
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        margin:10,
        backgroundColor:"black",
        borderRadius:20,
        elevation:30,
        shadowOffset:{
            width:1,
            height:2
        },
        shadowOpacity:20,
        shadowColor:'red'


    }
})