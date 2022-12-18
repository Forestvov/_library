import {api} from "./api";

export async function getXSRF() {
    const cookie = getCookie('XSRF-TOKEN', () => null)
    if (cookie) {
        return getCookie('XSRF-TOKEN', () => null)
    }

    await api({ url: '/csrf-cookie', method: 'get' })

    return getCookie('XSRF-TOKEN', getXSRF)
}

export const getCookie = (name, callback) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift())
    }

    callback()
}
