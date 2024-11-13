const mdc = require('../funcoes/mdc');

test('O MDC deve estar correto', () => {
    expect(mdc(12, 6)).toBe(6)
});

test('O MDC deve estar correto', () => {
    expect(mdc(5, 10)).toBe(5)
});