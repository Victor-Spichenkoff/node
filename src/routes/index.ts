import { Router } from "express"
import { zodTestController } from "../zod/zod"
import { onlyLoged } from "../middlewares/auth"
import { isLogged, loginController } from "../controllers/auth.contoller"
import { localStrategyMiddleware } from "../libs/passport-local"

const router = Router()

router.get('/', (req, res) => {
    res.send("NHE")
})

router.post('/zod', zodTestController)




//login
router.post("/login", localStrategyMiddleware, loginController)


//only logged
// router.use(onlyLoged)

router.get("/isLogged", isLogged)



export default router