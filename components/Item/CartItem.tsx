import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deletItemsfromCart, selectCart, updateCart } from '../../src/redux/CartSlice';

type Product = {
  brand: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  title: string;
};

const CartItem = (item: Product) => {
  const dispatch = useDispatch();
  const cartData = useSelector(selectCart);
  const cartItem = cartData.filter((element) => element.id === item.id);

  function PressAddtoCart() {
    if (cartItem[0].quantity > 4) return;
    if (cartItem.length === 0) {
      dispatch(
        addToCart({
          id: item.id,
          brand: item.brand,
          title: item.title,
          price: item.price,
          quantity: 1,
          image: item.image,
        })
      );
    } else {
      dispatch(
        updateCart({
          id: item.id,
          brand: item.brand,
          title: item.title,
          price: item.price,
          quantity: cartItem[0].quantity + 1,
          image: item.image,
        })
      );
    }
  }

  function deleteItem() {
    if (cartItem[0].quantity > 1) {
      dispatch(
        updateCart({
          id: item.id,
          brand: item.brand,
          title: item.title,
          price: item.price,
          quantity: cartItem[0].quantity - 1,
          image: item.image,
        })
      );
    } else {
      dispatch(deletItemsfromCart({ id: item.id }));
    }
  }

  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.image }} />

      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.subText}>{item.brand}</Text>
        <Text style={[styles.text, { fontSize: 18 }]}>₹{item.price}</Text>

        <View style={styles.con3}>
          <TouchableOpacity
            style={styles.removeButtonContainer}
            onPress={() => dispatch(deletItemsfromCart({ id: item.id }))}
          >
            <Text style={[styles.text, styles.buttonText]}>Remove</Text>
          </TouchableOpacity>

          {item.quantity >= 0 && (
            <>
              <TouchableOpacity onPress={() => PressAddtoCart()} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <Text style={[styles.text, { marginLeft: 5 }]}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => deleteItem()} style={styles.quantityButton}>
                <Text style={[styles.buttonText, styles.boldText]}>-</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE0E2',
  },

  item: {
    flexDirection: 'row',
    width: '94%',
    height: 150,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    elevation: 1,
    borderColor: 'black',
    alignSelf: 'center',
    padding: 10,
    gap: 10,
  },
  image: {
    marginTop: 15,
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  subText: {
    color: 'gray',
    fontSize: 15,
  },
  con3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  removeButtonContainer: {
    backgroundColor: '#FF5252', // Red color
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // White text color
    paddingHorizontal: 5,
  },
  quantityButton: {
    backgroundColor: '#4CAF50', // Green color
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    paddingHorizontal: 7,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
