import { RequestHandler } from "express"
import z from "zod"

const UserSchema = z.object({
    name: z.string().min(2, "Minimo de 2 letras"),
    email: z.string().email("Email, não sabe ler?")
})


type User = z.infer<typeof UserSchema>


const data = {
    name: "Victor",
    email: "vss.com"
    // email: "vss@alsh.com"
}


function verify() {
    const res = UserSchema.safeParse(data)
    if (!res.success) console.log(res.error.message)

    // const res = UserSchema.parse(data)

    console.log(res)
}





//validar a request
export const zodTestController: RequestHandler = (req, res) => {
    const body = UserSchema.safeParse(req.body)
    if (!body.success)
        return res.status(400).send("Envia os dados certo, animal!\nERRO: " + body.error.message)
    const { name, email } = req.body
    res.send("Criado!")
}


// verify()