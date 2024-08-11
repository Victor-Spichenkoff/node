import jwt from "jsonwebtoken"
import { User } from "../types/user"

export const findUserByEmailAndPassword = async (email: string, password: string) => {
    if (email == "v@gmail.com" && password == "1") {
        const correctUser: User = { 
            id: 18,
            name: "Victor"
        }

        return correctUser
    }

    return null
}


export const findUserById = async (id: string) => {
    if (id == "18") {
        const correctUser: User = { 
            id: 18,
            name: "Victor"
        }

        return correctUser
    }

    return null
}



export const createToken = (user: User) => {
    return "1234"
}


export const createJWTToken = (user: User) => {
    const payload = {
        id: user.id
    }

    return jwt.sign(payload, String(process.env.JWT_KEY), {
        expiresIn: "1m"
    }) 
}


export const findUserByToken = (token: string) => {
    if(token == "1234") {
        //pegar no db
        const correctUser: User = { 
            id: 18,
            name: "Victor"
        }

        return correctUser
    }

    return null
}