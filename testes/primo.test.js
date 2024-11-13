const primo = require('../funcoes/primo');

test('O codigo deve retornar se o número é primo ou nao' , () => {
    expect(primo(3)).toBe(true)
})