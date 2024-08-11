import express, { json }  from "express"
import mainRouter from "./src/routes/indexRouter"
import { handle500Errors } from "./src/routes/errorHandlers"
import passport from "passport"
import { localStrategy } from "./src/libs/passport-local"
import { bearerStrategy } from "./src/libs/passport-bearer"
import { jwtStrategy } from "./src/libs/passport-jwt"

const app = express()

app.use(json())



passport.use(localStrategy)
passport.use(bearerStrategy)
passport.use(jwtStrategy)
app.use(passport.initialize())

//rotas
app.use(mainRouter)


app.use(handle500Errors)


const port = 2006
app.listen(port, ()=> console.log(`Rodando na porta ${port} --> http://localhost:${port}`))