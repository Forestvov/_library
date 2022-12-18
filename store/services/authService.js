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

export const authService = createApi({
    reducerPath: 'authService',
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
        sendCode: builder.mutation({
            query: (phone) => ({
                url: 'send-code',
                method: 'POST',
                body: {
                    phone: phone
                }
            })
        }),
        verifyPhone: builder.mutation > ({
            query: ({phone, code}) => ({
                url: 'verify-phone',
                method: 'POST',
                body: {
                    phone: phone,
                    code: code
                }
            })
        }),
        login: builder.mutation > ({
            query: ({phone, code}) => ({
                url: 'login',
                method: 'POST',
                body: {
                    phone: phone,
                    code: code
                }
            })
        }),
    })
})

export const {useSendCodeMutation, useVerifyPhoneMutation, useLoginMutation} = authService