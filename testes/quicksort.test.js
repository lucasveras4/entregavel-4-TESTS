const quicksort = require('../funcoes/quicksort');

test('O array deve estar ordenado' , () => {
    expect(quicksort([17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5])).toMatchObject([0, 1, 2, 3, 4, 5, 9, 14, 15, 17, 23])
});

test('O array deve estar odernado' , () => {
    expect(quicksort([3, 1, 21, 12, 5, 9 , 25, 16])).toMatchObject([1, 3, 5, 9, 12, 16, 21, 25])
})