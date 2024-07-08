/**
 * Calculate average.
 * @constructor
 * @param {Array} array - The array of numbers.
 */

import isString from "./isString";

const average = (array) => {
    if (!Array.isArray(array) || array?.length === 0) return null


    let sum = 0

    for (let i = 0; i < array?.length; i++ ) {

        isString(array[i])
        sum += array[i];
    }

    return sum / array?.length
}

export default average