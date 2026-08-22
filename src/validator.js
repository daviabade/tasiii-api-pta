function validarChamado(titulo) {
    if (!titulo || titulo.trim() === "") {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    return true;
}

module.exports = validarChamado;