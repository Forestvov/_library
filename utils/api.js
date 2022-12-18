import axios from 'axios'

const apiPath = process.env.NEXT_PUBLIC_API

export const api = ({ url, data = {}, method, headers = {} }) =>
    new Promise(async (resolve, reject) => {
        const appendData = {}
        if (data !== undefined)
            appendData[method === 'get' ? 'params' : 'data'] = data

        const res = await axios({
            method: method || 'post',
            url: apiPath + url,
            timeout: 100000,
            ...appendData,
            withCredentials: true,
            headers
        })
            .then(resolve)
            .catch(reject)
    })
