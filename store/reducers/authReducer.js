import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pending: true
}

//Здесь много условностей, зависит все от бэка и дизайна, можно юзать как шаблон
export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {}
})