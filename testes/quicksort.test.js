const quicksort = require('../funcoes/quicksort');

test('Ordenar array [5, 3, 8, 4, 2]', () => {
    const resultado = quicksort([5, 3, 8, 4, 2]);
    expect(resultado).toEqual([2, 3, 4, 5, 8]);
});

test('Ordenar array com números repetidos [7, 2, 7, 4, 1]', () => {
    const resultado = quicksort([7, 2, 7, 4, 1]);
    expect(resultado).toEqual([1, 2, 4, 7, 7]);
});
