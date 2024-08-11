import { RequestHandler } from "express"
import { Strategy as LocalStrategy } from "passport-local"
import { createJWTToken, findUserByEmailAndPassword } from "../services/user"
import { User } from "../types/user"
import passport from "passport"

export interface ILocalStrategyResponse {
    auth: {
        token: string
    }
    user: User
}


//criar estrategia de autenticação (ver se está certo (consulta a db/api externa...))
export const localStrategy = new LocalStrategy({
    //troca o nome padrão
    usernameField: "emial",//mesmo nome que vem no req (json/query)
    passwordField: "password"
}, async (emial, password, done) => {//função de verificação

    const user = await findUserByEmailAndPassword(emial, password)
    if (user) {
        const token = createJWTToken(user)
        const response: ILocalStrategyResponse = {
            auth: {
                token
            },
            user
        }

        return done(null, response)

    } else {
        return done(null, false)//1° == erro; 2° == user/false
    }
})



//criar middleware para mexer isso
export const localStrategyMiddleware: RequestHandler = (req, res, next) => {
    const authRequest = passport.authenticate(
        "local", 
        //strategia usada e fn de fazer a verificação
        (err: any, StartegyResponse: ILocalStrategyResponse|false)=>{
            if(StartegyResponse) {
                //coloca os dados no req do proximo e deixa passar
                req.user = StartegyResponse.user
                req.authInfo = StartegyResponse.auth

                return next()
            }

            return res.status(401).send({ error: "Erro no login" })
    })

    authRequest(req, res, next)
} 

// criar strategy, que retorna um done(false, res com user e auth | false)
//implementar um middleware