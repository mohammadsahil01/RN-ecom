import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/Navbars/SearchBar'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamsList,"Home2">;


const Home2 = ({navigation}:HomeProps) => {
  return (
    <SafeAreaView >
        <SearchBar navigation={navigation} />
        <View style={{alignItems:"center"}}>
            <Pressable
            style={{width:"90%"}}
            onPress={()=>navigation.navigate("Phones")}>
            <View style={[styles.card,]}>
            <Image 
            style={styles.image}
            source={{uri:"https://t3.ftcdn.net/jpg/04/95/78/12/240_F_495781200_JOUB6c1iDe7Qow963MvVtrj25wMjF74n.jpg"}}/>
            <Text style={styles.text}>Electronics</Text>
            </View>
            </Pressable>
            
            <Pressable
            style={{width:"90%"}}
            onPress={()=>navigation.navigate("Cosmetics")}>
            <View style={styles.card}>
            <Image
            style={styles.image}
            source={{uri:"https://img.freepik.com/free-vector/floating-face-powder-lipstick-cartoon-vector-icon-illustration-object-beauty-icon-isolated_138676-4703.jpg"}}/>
            <Text style={styles.text}>Cosmetics</Text>
            </View>
            </Pressable>
           
        </View>
    </SafeAreaView>
  )
}

export default Home2;

const styles = StyleSheet.create({
    card:{
        flexDirection:"row",
        alignContent:"center",
        width:"100%",
        height:150,
        backgroundColor:"white",
        marginVertical:10,
        borderRadius:10,
        borderColor:"#616C6F",
        borderWidth:0.5,
        elevation:3
    },
    image:{
        width:"30%",
        height:120,
        margin:15,
        borderRadius:10
    },
    text:{
        color:"black",
        fontSize:25,
        paddingTop:50,
        paddingLeft:15

    }
})