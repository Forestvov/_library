import {combineReducers, configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import {authReducer} from "./reducers/authReducer";
import {cartReducer} from "./reducers/cartReducer";
import {profileReducer} from "./reducers/profileReducer";

import {authService} from "./services/authService";
import {profileService} from "./services/profileService";
import {cartService} from "./services/cartService";

const reducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,

    [authService.reducerPath]: authService.reducer,
    [profileService.reducerPath]: profileService.reducer,
    [cartService.reducerPath]: cartService.reducer,
})

export const store = () => {
    return configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(
                logger,
                authService.middleware,
                profileService.middleware,
                cartService.middleware,
            ),
    })
}