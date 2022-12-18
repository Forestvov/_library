import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

import {getXSRF} from "../../utils/getXSRF";

const apiPath = process.env.NEXT_PUBLIC_API

// Юзаем как шаблон, подставляем свои энд поинты
// Если нужно подредактировать ответ сервера (изменить структуру данных), вот пример:
// https://redux-toolkit.js.org/rtk-query/usage/mutations
// getProfile: builder.mutation({
//     query: () => ({
//         url: 'personal/profile',
//         method: 'GET'
//     }),
//     transformResponse: (rawResult) => {
//         return rawResult.data
//     }
// }),

export const cartService = createApi({
    reducerPath: 'cartService',
    baseQuery: fetchBaseQuery({
        baseUrl: apiPath,
        credentials: 'include',
        prepareHeaders: async headers => {
            const token = await getXSRF()
            if (token) {
                headers.set('X-XSRF-TOKEN', `${token}`)
            }
            headers.set('Accept', `application/json`)
            return headers
        }
    }),
    endpoints: builder => ({
        getCart: builder.mutation({
            query: () => ({
                url: `cart`,
                method: 'GET'
            }),
        }),
        addToCart: builder.mutation({
            query: ({id}) => ({
                url: 'cart/add',
                method: 'POST',
                body: {
                    id: id
                }
            }),
        }),
        removeFromCart: builder.mutation({
            query: ({id}) => ({
                url: 'cart/remove',
                method: 'POST',
                body: {
                    id: id,
                }
            }),
        }),
        updateAmount: builder.mutation({
            query: ({id, amount}) => ({
                url: 'cart/update',
                method: 'POST',
                body: {
                    id: id,
                    amount: amount
                }
            }),
        }),
    })
})

export const {
    useGetCartMutation,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useUpdateAmountMutation,
} = cartService