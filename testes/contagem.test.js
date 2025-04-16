const contarAprovacoes = require('../funcoes/contagem');

test('3 notas, 2 aprovadas', () => {
    const resultado = contarAprovacoes([70, 45, 90]);
    expect(resultado).toBe(2);
});

test('5 notas, nenhuma aprovada', () => {
    const resultado = contarAprovacoes([10, 20, 30, 40, 49]);
    expect(resultado).toBe(0);
});
