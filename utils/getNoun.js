export const getNoun = (number, one, two, five,) => {
    if (number % 10 === 1 && number !== 11) {
        return one
    }
    if (number % 10 >= 2 && number % 10 <= 4 && (number < 12 || number > 14)) {
        return two
    }
    return five
}

//Пример
getNoun(5, 'товар', 'товара', 'товаров')