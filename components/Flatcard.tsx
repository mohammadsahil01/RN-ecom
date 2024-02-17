import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function Flatcard() {
  return (
      <View style={styles.container}>
          
        <View style={[styles.card]}>
          <Image
            style={styles.logo}
            source={{
              uri:images[0],
            }}
          />
        </View>
        <View style={[styles.card, styles.card3]}>
        <Image
            style={styles.logo}
            source={{
              uri: images[1]
            }}
          />
        </View> 
        <View style={[styles.card]}>
          <Image
            style={styles.logo}
            source={{
              uri:images[0],
            }}
          />
        </View>
        <View style={[styles.card, styles.card3]}>
        <Image
            style={styles.logo}
            source={{
              uri: images[1]
            }}
          />
        </View> 
        <View style={[styles.card, styles.card3]}>
        <Image
            style={styles.logo}
            source={{
              uri: images[1]
            }}
          />
        </View> 
        
        <View style={[styles.card, styles.card4]}>
        <Image
            style={styles.logo}
            source={{
              uri: images[2]
            }}
          />
        </View>

      </View>

  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 15
  },
  CardText: {
    fontSize: 20,
    fontWeight: "bold",
    // textAlign:"center",
  },
  container: {
    flexDirection: "row",
    paddingTop: 20,
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-between', // Add space between items
    paddingHorizontal:10
  },
  card: {
    width: '48%', // Set the width to 48% for two cards in one row with some space in between
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    marginVertical: 8,
    borderRadius: 10,
  },
  card1: {
    backgroundColor: "red",
  },
  card2: {
    backgroundColor: "blue",
  },
  card3: {
    
  },
  card4: {
    
  },

  container2: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
   
  },
  container3: {
    flexDirection: "row",
    alignItems: "center"
  }
});

const images = [
  'https://www.bhg.com/thmb/DlgEWl0_TVGwS-lxYWghjh3MYoU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/victorian-parlor-palm-408ee613-80e76c21cbc845ef8f2bc90cadce04ba.jpg',
  'https://market99.com/cdn/shop/files/market99-fake-mini-succulent-plant-pot-artificial-flora-6-29022130864298_2048x2048.jpg?v=1697013118',
  'https://market99.com/cdn/shop/files/von-casa-green-grass-artificial-potted-plant-stone-finish-artificial-flora-1_2048x2048.jpg?v=1697016668'
]