import {createSlice} from '@reduxjs/toolkit'

import {profileService} from "../services/profileService";

const defaultFieldsPersona = {
    name: '',
    second_name: '',
    phone: '',
    is_phone_verified: false,
    email: '',
    is_email_verified: false,
    birthdate: null,
    delivery_city: null,
    delivery_street: null,
    delivery_house: null,
    delivery_entrance: null,
    delivery_floor: null,
}

const initialState = {
    pending: true,
    isAuthorized: false,
    persona: defaultFieldsPersona,
    ordersLoadingPage: true,
    orders: []
}

//Здесь много условностей, зависит все от бэка и дизайна, можно юзать как шаблон
export const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(profileService.endpoints.getProfile.matchPending, state => {
            state.pending = true
            state.persona = defaultFieldsPersona
        })
        builder.addMatcher(
            profileService.endpoints.getProfile.matchFulfilled,
            (state, {payload}) => {
                state.persona = payload
                state.pending = false
                state.isAuthorized = true
            }
        )
        builder.addMatcher(profileService.endpoints.getProfile.matchRejected, state => {
            state.persona = defaultFieldsPersona
            state.pending = true
            state.isAuthorized = false
        })
        builder.addMatcher(profileService.endpoints.logout.matchFulfilled, state => {
            state.persona = defaultFieldsPersona
            state.pending = true
            state.isAuthorized = false
        })
        builder.addMatcher(profileService.endpoints.getOrders.matchPending, state => {
            state.ordersLoadingPage = true
        })
        builder.addMatcher(
            profileService.endpoints.getOrders.matchFulfilled,
            (state, {payload}) => {
                state.ordersLoadingPage = false
                state.orders = payload.data
            }
        )
        builder.addMatcher(profileService.endpoints.getOrders.matchRejected, state => {
            state.ordersLoadingPage = false
            state.orders = []
        })
    }
})