import NumberFormat from 'react-number-format'

export const Price = ({value, useSign = true}) => {
    return (
        <>
            <NumberFormat
                displayType='text'
                value={Math.round(value)}
                thousandSeparator=' '
            />
            {useSign ? ' ₽' : ''}
        </>
    )
}
