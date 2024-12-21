import { createSlice } from "@reduxjs/toolkit";

type cartItemType = {
    id: string,
    name: string,
    price: number,
    qty: number
}
const initialState:cartItemType[] = [];

const cartFun = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        },
        deleteFromCart(state, action){
            return state.filter(item => item.id != action.payload.id)
        }
    }
})

export const {addToCart, deleteFromCart} = cartFun.actions

export default cartFun.reducer