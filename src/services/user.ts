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



export const createToken = (user: User) => {
    return "1234"
}