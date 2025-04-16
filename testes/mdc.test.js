const calcularMDC = require('../funcoes/mdc');

test('MDC de 48 e 18 deve ser 6', () => {
    expect(calcularMDC(48, 18)).toBe(6);
});

test('MDC de 100 e 25 deve ser 25', () => {
    expect(calcularMDC(100, 25)).toBe(25);
});
