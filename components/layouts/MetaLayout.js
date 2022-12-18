import NextHead from 'next/head'
import React from 'react'

export const MetaLayout = props => {
    const {title, children, description} = props
    return (
        <>
            <NextHead>
                <meta charSet='UTF-8'/>
                <title>{title ? title : 'name site'}</title>
                {description ? <meta name='description' content={description}/> : null}
                <meta
                    name='viewport'
                    content='width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
                />
            </NextHead>
            {children}
        </>
    )
}
