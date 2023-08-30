import conexao from "./connection.js";

export async function listarTipos() {
    
    let comando = `select * from tb_tipo`;

    let resp = await conexao.query(comando)
    let dados = resp[0]
    return dados

}