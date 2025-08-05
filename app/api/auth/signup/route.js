import User from "@/models/user"
import { generateToken, hashPasshandler } from "@/utils/auth"
import connectToDb from "@/utils/db"
import { serialize } from "cookie"

export const POST = async (req) => {
    
    try {
        await connectToDb()

        const body = await req.json()        

        const { username, email, password } = body

        if (!username.trim() || !email.trim() || !password.trim()) {
            return new Response(JSON.stringify({ message: 'Datas are not valid!' }), { status: 422 })
        }

        const isUserExist = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (isUserExist) {
            return new Response(JSON.stringify({ message: 'This username or email is already exist' }), { status: 422 })
        }
        
        const hashedPass = await hashPasshandler(password)
        
        const token = generateToken({ email })

        console.log(token);
        

        const users = await User.find({})

        await User.create({ username, email, password: hashedPass, role: users.length > 0 ? 'USER' : 'ADMIN' })
        
        return new Response(JSON.stringify({ message: 'You are signuped successfully' }), {
            status: 201,
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