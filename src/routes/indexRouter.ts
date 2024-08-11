import { Router } from "express"
import { zodTestController } from "../zod/zod"
import { onlyLoged } from "../middlewares/auth"
import { isLogged, loginController } from "../controllers/auth.contoller"
import { localStrategyMiddleware } from "../libs/passport-local"
import { bearerStrategyMiddleware } from "../libs/passport-bearer"
import { jwtStrategyMiddleware } from "../libs/passport-jwt"
import multer from "multer"
import { uploadController } from "../controllers/upload"

const router = Router()

router.get('/', (req, res) => {
    res.send("NHE")
})

router.post('/zod', zodTestController)



//updoad de arquivos
const upload = multer({
    dest: "src/uploads/"
})
//manda para a pasta e controller, depois decide o que fazer

//nome do campo onde vai receber
// trocar a forma de envio (josn -> multiform/data)
router.post("/upload", upload.single("foto"), uploadController)



//login
router.post("/login", localStrategyMiddleware, loginController)


router.get("/private", bearerStrategyMiddleware, (req, res) => res.send({ msg: "Acessou rota privada " }))


router.get(
    "/private/jwt", 
    jwtStrategyMiddleware,
    (req, res) => res.send({ msg: "Acessou rota privada com JWT " })
)




//only logged
// router.use(onlyLoged)

router.get("/isLogged", isLogged)



export default router