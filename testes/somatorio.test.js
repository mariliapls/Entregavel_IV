const calcularSomatorio = require('../funcoes/somatorio');

test('somatório de [1, 2, 3, 4] deve ser 10', () => {
    const resultado = calcularSomatorio([1, 2, 3, 4]);
    expect(resultado).toBe(10);
});

test('somatório de [-5, 10, -2] deve ser 3', () => {
    const resultado = calcularSomatorio([-5, 10, -2]);
    expect(resultado).toBe(3);
});
