import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';

const Carousel = (product: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const renderDot = (index: number) => (
    <TouchableOpacity
      key={index}
      style={[styles.dot, index === activeIndex && styles.activeDot]}
      onPress={() => handleDotPress(index)}
    />
  );

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  const flatListRef = useRef<FlatList | null>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={product.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onScroll={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setActiveIndex(index);
        }}
      />
      <View style={styles.discountCircleContainer}>
        <Text style={styles.DiscountCircle}>-{Math.floor(product.discountPercentage)}%</Text>
      </View>
      <View style={styles.dotsContainer}>{product.images.map((_:any, index: number) => renderDot(index))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  itemContainer: {
    width: Dimensions.get('window').width,
  },
  image: {
    marginHorizontal: 10,
    width: '95%',
    height: 400,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -25,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin:5,
  },
  discountCircleContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, // Bring the discount circle above images
  },
  DiscountCircle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#BA2F16',
    margin: 5,
    fontSize:18,
    fontWeight:"800",
    paddingLeft:2,
    paddingTop:7,

  },
  activeDot: {
    backgroundColor: '#8cdddc',
  },
});

export default Carousel;
