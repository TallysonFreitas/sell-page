import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface cartState{
    products:number[]
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
        }
    }
})

export default cartReducer.reducer

export const { incrementTotalPrice} = cartReducer.actions
