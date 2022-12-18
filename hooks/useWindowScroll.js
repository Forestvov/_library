import { useState, useEffect } from 'react';

export const useWindowScroll = () => {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const setScroll = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            })
        }

        window.addEventListener('scroll', setScroll)

        return () => window.removeEventListener('scroll', setScroll)
    }, [])

    return scrollPosition
}