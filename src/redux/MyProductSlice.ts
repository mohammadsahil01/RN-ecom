import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name:'product',
    initialState:null,
    reducers:{
        addMyproducts(state,action){
            state = (action.payload)
        }
    }
})

export const {addMyproducts} = MyProductSlice.actions;

export default MyProductSlice.reducer;