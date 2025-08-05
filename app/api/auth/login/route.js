import User from "@/models/user"
import { generateToken, IsvalidPassHandler } from "@/utils/auth"
import connectToDb from "@/utils/db"
import { serialize } from "cookie"

export const POST = async (req) => {

    try {
        await connectToDb()

        const body = await req.json()

        const { identifier, password } = body

        if (!identifier.trim() || !password.trim()) {
            return new Response(JSON.stringify({ message: 'Datas are not valid!' }), { status: 422 })
        }

        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }]
        })

        if (!user) {
            return new Response(JSON.stringify({ message: 'Account not found' }), { status: 404 })
        }

        const IsvalidPass = await IsvalidPassHandler(password, user.password)

        if (!IsvalidPass) {
            return new Response(JSON.stringify({ message: 'Username or Password is not correct' }), { status: 422 })
        }

        const token = generateToken({ email: user.email })

        return new Response(JSON.stringify({ message: 'You are loggedin successfully' }), {
            status: 200,
            headers: {
                'Set-Cookie':
                    serialize('token', token, {
                        maxAge: 60 * 60 * 48,
                        httpOnly: true,
                        path: '/'
                    })
            }
        })

    } catch (error) {
        return new Response(JSON.stringify({ message: error }), { status: 500 })
    }
}