import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CartNav from '../../components/Navbars/CartNav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../App';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/CartSlice';
import CartItem from '../../components/Item/CartItem';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

type CartProps = NativeStackScreenProps<RootStackParamsList, 'Cart'>;

const Cart = ({ navigation }: CartProps) => {
  const cartData = useSelector(selectCart);
  
  const Subtotal = cartData.reduce((amount,item)=>(item.price)*item.quantity+amount,0)
  return (
    <View style={styles.container}>
      <CartNav navigation={navigation} />
      {cartData.length === 0 && (
        <View style={styles.emptyCart}>
           <Icon name='cart-outline' size={50} color={"black"}></Icon>
          <Text style={{color:"black",fontSize:30}}>Your cart is empty</Text>
         
        </View>
      )}
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <CartItem {...item} key={index} />
            </View>
          );
        }}
      />
      {cartData.length > 0 && (
        <View style={styles.totalCard}>
          <View style={styles.subtotal}>
            <Text style={styles.subtotalText}>No. of Items</Text>
            <Text style={styles.subtotalText}>{cartData.length}</Text>
          </View>
          <View style={styles.subtotal}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={styles.subtotalText}>₹{Subtotal}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE0E2',
  },

  emptyCart:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white",
    borderRadius:10,
    margin:10,
  },
  totalCard: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
  },

  subtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  subtotalText: {
    color: "black",
    fontWeight:"bold",
    fontSize: 20,
  }

});

export default Cart;
