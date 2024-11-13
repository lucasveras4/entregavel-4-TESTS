const contagem = require('../funcoes/contagem');

test('O programa deve contar a quantidade de números inteiros em um array corretamemte' , () => {
    expect(contagem([1, 2.5, 4, 7, 1.25])).toBe(3)
});

test('O programa deve contar a quantidade de números inteiros em um array corretamemte' , () => {
    expect(contagem([1.2, 2.5, 3.2, 5.4, 6])).toBe(1)
})