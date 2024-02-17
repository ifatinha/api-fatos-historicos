const express = require("express");
const app = express();

const retonarFatoHistoricoAno = require("./retornarFatoHistorico");
const validaAno = require("./retornarFatoHistorico");

app.get("/", (req, res) => {
    let ano = parseInt(req.query.ano);

    if (validaAno.validaAno(ano)) {
        let fatoHistorico = retonarFatoHistoricoAno.retonarFatoHistoricoAno(ano);
        res.json(fatoHistorico);
    } else {
        res.status(404).json({ erro: "Parâmetro ano inválido!" });
    }
})

app.listen(8080, () => {
    console.log("Servidor Iniciado!!!");
})