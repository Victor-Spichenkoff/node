import { RequestHandler } from "express";

export const isLogged:RequestHandler = (req, res) => {
    res.send("Está logado")
} 


//é uasdo depois do middleware de login (strategy), recebe o req dele
export const loginController: RequestHandler = async (req, res) => {
    res.send({
        user: req.user,
        auth: req.authInfo
    })
}