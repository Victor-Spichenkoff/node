import express, { json }  from "express"
import mainRouter from "./src/routes"
import { handle500Errors } from "./src/routes/errorHandlers"
import passport from "passport"
import { localStrategy } from "./src/libs/passport-local"

const app = express()

app.use(json())



passport.use(localStrategy)
app.use(passport.initialize())

//rotas
app.use(mainRouter)


app.use(handle500Errors)


const port = 2006
app.listen(port, ()=> console.log(`Rodando na porta ${port} --> http://localhost:${port}`))