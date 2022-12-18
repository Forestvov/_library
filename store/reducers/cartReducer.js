import { createSlice } from '@reduxjs/toolkit'
import {cartService} from "../services/cartService";


const initialState = {
    pending: true,
    list: []
}

//Здесь много условностей, зависит все от бэка и дизайна, можно юзать как шаблон
export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(cartService.endpoints.getCart.matchPending, state => {
            state.pending = true
        })
        builder.addMatcher(
            cartService.endpoints.getCart.matchFulfilled,
            (state, { payload }) => {
                state.list = payload
                state.pending = false
            }
        )
        builder.addMatcher(
            cartService.endpoints.addToCart.matchFulfilled,
            (state, { payload }) => {
                state.list = payload
            }
        )
        builder.addMatcher(
            cartService.endpoints.removeFromCart.matchFulfilled,
            (state, { payload }) => {
                state.list = payload
            }
        )
        builder.addMatcher(
            cartService.endpoints.updateAmount.matchFulfilled,
            (state, { payload }) => {
                state.list = payload
            }
        )
    }
})