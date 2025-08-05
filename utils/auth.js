import { sign, verify } from "jsonwebtoken"
import { compare, hash } from "bcryptjs"
import User from "@/models/user"
import { cookies } from "next/headers"
import connectToDb from "./db"

const hashPasshandler = async (password) => {
    const hashedPass = hash(password, 12)
    return hashedPass
}

const generateToken = ({ ...data }) => {
    const token = sign({ data }, process.env.privateKey, {
        expiresIn: '48h'
    })
    return token
}

const IsvalidPassHandler = async (password, hashedPass) => {
    const IsvalidPass = compare(password, hashedPass)
    return IsvalidPass
}

const IsvalidTokenHandler = async (token) => {
    try {
        const IsvalidToken = verify(token, process.env.privateKey)
        return IsvalidToken
    } catch (error) {
        console.log(error);
    }
}

const getUser = async () => {
    await connectToDb()
    const token = (await cookies()).get('token')?.value

    if (!token) {
        return false
    }

    const verifedToken = await IsvalidTokenHandler(token)

    if (!verifedToken) {
        return false
    }

    const user = await User.findOne({
        email: verifedToken.data?.email
    })

    return user
}


export { hashPasshandler, generateToken, IsvalidPassHandler, IsvalidTokenHandler, getUser }