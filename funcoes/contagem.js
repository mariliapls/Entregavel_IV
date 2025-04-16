function contarAprovacoes(notas) {
    let contador = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 50) {
            contador++;
        }
    }

    return contador;
}

module.exports = contarAprovacoes;
