export const getData = (string) => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ]

    const year = string?.split('-')[2]
    const day = parseInt(string?.split('-')[0])
    const month = parseInt(string?.split('-')[1])
    return `${day} ${months[month - 1]} ${year?.slice(-4)}`
}
