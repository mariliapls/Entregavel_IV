function gerarFibonacci(N, termo1, termo2) {
    if (N <= 0) return [];
    if (N === 1) return [termo1];
    if (N === 2) return [termo1, termo2];

    const sequencia = [termo1, termo2];

    for (let i = 3; i <= N; i++) {
        const novoTermo = termo1 + termo2;
        sequencia.push(novoTermo);
        termo1 = termo2;
        termo2 = novoTermo;
    }

    return sequencia;
}

module.exports = gerarFibonacci;
