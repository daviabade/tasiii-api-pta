function validarChamado(titulo) {
    if (!titulo || titulo.trim() === "") {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (titulo.length < 5) {
        throw new Error("o título deve possuir no mínimo 5 caracteres");
    }

    if (titulo.length > 100) {
        throw new Error("o título deve possuir no máximo 100 caracteres");
    }

    return true;
}

module.exports = validarChamado;