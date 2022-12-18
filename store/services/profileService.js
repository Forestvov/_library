import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

import {getXSRF} from "../../utils/getXSRF";
import {queryPhp} from "../../utils/queryPhp";

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

export const profileService = createApi({
    reducerPath: 'profileService',
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
        getProfile: builder.mutation > ({
            query: () => ({
                url: 'personal/profile',
                method: 'GET'
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST'
            })
        }),
        getOrders: builder.mutation({
            query: query => ({
                url: `personal/orders?${queryPhp({...query})}`,
                method: 'GET'
            })
        }),
        getOrder: builder.query({
            query: query => ({
                url: `personal/orders/${query}`,
                method: 'GET'
            })
        }),
    })
})

export const {useGetProfileMutation, useGetOrdersMutation, useGetOrderQuery, useLogoutMutation} = profileService