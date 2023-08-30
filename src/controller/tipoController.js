import { Router } from "express";
import { listarTipos } from "../repository/tipoVeiculoRepository.js";

let endpoints = Router()

endpoints.get('/veiculo/tipo', async (req, resp) => {
    let dados = await listarTipos()
    resp.send(dados)
})







export default endpoints;