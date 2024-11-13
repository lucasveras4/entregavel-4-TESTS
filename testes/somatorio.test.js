const somatorio = require('../funcoes/somatorio');

test('A soma dos elementos deve estar correta' , () => {
    expect(somatorio([10, 20, 30, 40, 50])).toBe(150)
});

test('A soma dos elementos deve estar correta' , () => {
    expect(somatorio([1, 2, 3, 4, 5])).toBe(15)
});