
let arr = [17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5]
function quicksort(array) {
    if (array.length <= 1) {
        return array
    }

    let pivot = array[0]

    let esq = []
    let dir = []

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? esq.push(array[i]) : dir.push(array[i])
    }

    return quicksort(esq).concat(pivot, quicksort(dir))
}

module.exports = quicksort;

