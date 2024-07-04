import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../containers/About";

interface cartState{
    products:ProductType[]
    totalPrice: number
}

const initialState = {
    products:[],
    totalPrice: 0
} satisfies cartState as cartState

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers:{
        incrementTotalPrice: (state,action:PayloadAction<number>)=>{
            state.totalPrice += action.payload
        },
        addProduct: (state, action:PayloadAction<ProductType>)=>{
            if(state.products.some(each=>each.id === action.payload.id)){
                state.products = state.products.filter(each=>each.id !== action.payload.id)
            }else{
                state.products.push(action.payload)
            }
        }
    }
})

export default cartReducer.reducer

export const { incrementTotalPrice, addProduct} = cartReducer.actions
