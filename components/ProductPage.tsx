import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from './Corousel';


const product = {
    "id": 11,
    "title": "Perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/11/1.jpg",
      "https://cdn.dummyjson.com/product-images/11/2.jpg",
      "https://cdn.dummyjson.com/product-images/11/3.jpg",
      "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
    ]
  }

const ProductPage = () => {
    const renderStars = () => {
        const maxStars = 5;
        const rating = Math.min(product.rating, maxStars); 
    
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
          stars.push(
            <Text key={i} style={i <= rating ? styles.starFilled : styles.starEmpty}>
             ★
            </Text>
          );
        }
        return stars;
      };

      const discountPrice =(itemPrice:number,discount:number)=>{
        return(`₹${itemPrice-Math.floor((discount/100)*itemPrice)}`)
    }
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.view1}>
        <Text style={[styles.text1,{color:"#2475B0"}]}>
            Brand: {product.brand}
        </Text>
        <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{product.rating}</Text>{renderStars()}
        </View>
    </View>
    <View>
         <Text style={styles.text2}>{product.title}</Text>
    </View>
    <View style={{flex:1}}>
        <Carousel {...product}/>
    </View>
    <View>
        <Text style={styles.PriceText} >
            <Text style={{color:'#E71C23',fontSize:30}} >-{product.discountPercentage}%</Text>  {discountPrice(product.price,product.discountPercentage)}
            </Text>
    </View>
    <Text style={{color:"black",fontSize:20,paddingHorizontal:10}}>M.R.P: <Text style={{textDecorationLine:"line-through"}}>₹{product.price}</Text>
    </Text>
    <Text style={{color:"#26ae60",fontSize:20,paddingLeft:10}}>In stock </Text>

    <View style={styles.buttonView}>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
        </Pressable>
    </View>
    
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProductPage;




const styles = StyleSheet.create({
    container: {
        flex: 1,     
      },
      view1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:8,
        paddingTop:5
      },
      text1:{
        color:"black",
        marginTop:7,
        fontSize:15
      },
      text2:{
        color:"black",
        padding:10,
        fontSize:30
      },
      PriceText:{
        fontSize:40,
        color:"black",
        marginLeft:10,
        paddingTop:20
      },

      ratingContainer: {
        flexDirection: 'row',
      },
      ratingText: {
        marginTop:4,
        marginRight: 5,
        fontSize: 16,
        
        color: '#6badb4', 
      },
      starFilled: {
        color: 'gold',
        fontSize: 18,
        marginRight: 2,
      },
      starEmpty: {
        color: '#DAE0E2', 
        fontSize: 18,
        marginRight: 2,
      },
      button:{
        backgroundColor:"#FFF222",
        width:"90%",
        alignItems:"center",
        padding:10,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#FAD02E",
      },
      buttonView:{flex:1,
        flexDirection:"column",
        alignItems:"center",
        rowGap:10,
        paddingVertical:10},

      buttonText:{
        color:"black",
        fontSize:20
      }
})