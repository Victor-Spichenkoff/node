import { RequestHandler } from "express";

export const onlyLoged: RequestHandler  = (req, res, next) => {
    const { authorization } = req.headers
    
    console.log(authorization)
    console.log(req.headers)
    if(!authorization) return res.status(401).send("Sem permissão")

    let logged = authorization

    if(!logged) {
        return res.status(401).send("Faça o login")
    }

    next()
}