import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
 // Replace with the actual path to your root reducer file

interface ProductType {
  id: number;
  brand:string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const initialState = {
    items:[] as ProductType[],
  
  };

const cartSlice = createSlice({
  name: 'cart',
  initialState:initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    updateCart(state,action){
        const index = state.items.findIndex(item=>item.id===action.payload.id)
        state.items[index] = (action.payload);
    },
    deletItemsfromCart(state,action){
        const index = state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index,1);
    }
  },
});

export const { addToCart,updateCart,deletItemsfromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
