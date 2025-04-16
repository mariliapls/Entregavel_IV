const ehPrimo = require('../funcoes/numeroprimo');

test('7 é primo', () => {
    expect(ehPrimo(7)).toBe(true);
});

test('10 não é primo', () => {
    expect(ehPrimo(10)).toBe(false);
});
