import { serialize } from "cookie"
import connectToDb from "../../../../utils/db"

export const GET = async () => {
    try {
        await connectToDb()

        return new Response(JSON.stringify({ message: 'You`re Logged out seccessfully!' }), {
            status: 200, headers: {
                'Set-Cookie': serialize('token', '', {
                    maxAge: 0,
                    path: '/'
                })
            }
        })
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}), {status: 500})
    }
}