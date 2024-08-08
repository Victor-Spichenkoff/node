import { ErrorRequestHandler } from "express";



//lida com error não tratados
export const handle500Errors: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err)
    res.status(500).send({ error: "Erro interno no servidor, tente mais tarde" })
}