const gerarFibonacci = require('../funcoes/fibonacci');

test('Sequência de 5 termos iniciando com 1 e 1 (Fibonacci)', () => {
    const resultado = gerarFibonacci(5, 1, 1);
    expect(resultado).toEqual([1, 1, 2, 3, 5]);
});

test('Sequência de 6 termos iniciando com 2 e 3', () => {
    const resultado = gerarFibonacci(6, 2, 3);
    expect(resultado).toEqual([2, 3, 5, 8, 13, 21]);
});
