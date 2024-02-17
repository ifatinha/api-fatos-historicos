const fatosHistoricos = require("./fatosHistoricos");

function retonarFatoHistoricoAno(ano) {
    let fatoHistorico = fatosHistoricos.fatosHistoricos.find((fato) => {
        return fato.ano === ano;
    });

    return fatoHistorico;
}

function validaAno(ano) {
    let eValido = (ano >= 1900 && ano <= 2020) ? true : false;
    return eValido;
}

exports.retonarFatoHistoricoAno = retonarFatoHistoricoAno;
exports.validaAno = validaAno;