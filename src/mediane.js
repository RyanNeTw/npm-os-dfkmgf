/**
 * Calculate mediane.
 * @constructor
 * @param {Array} array - The array of numbers.
 */


const mediane = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    arr.sort((a, b) => a - b);

    const milieu = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[milieu - 1] + arr[milieu]) / 2;
    } else {
        return arr[milieu];
    }
}
export default mediane
