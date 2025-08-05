import { sign } from "jsonwebtoken"
import { hash } from "bcryptjs"

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

export { hashPasshandler, generateToken }