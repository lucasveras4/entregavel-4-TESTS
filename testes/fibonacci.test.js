const fibonacci = require('../funcoes/fibonacci');

test('A sequencia de fibonacci deve estar corereta' , () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('A sequencia de fibonnaci deve estar correta' , () => {
expect(fibonacci(2)).toMatchObject([0, 1]);
});