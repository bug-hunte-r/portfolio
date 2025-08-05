import Message from "@/models/messgae"
import { getUser } from "@/utils/auth"
import connectToDb from "@/utils/db"

export const POST = async (req) => {

    try {
        await connectToDb()

        const body = await req.json()

        const { name, message } = body

        if (!name.trim() || !message.trim()) {
            return new Response(JSON.stringify({ message: 'Datas are not valid' }), { status: 422 })
        }

        const user = await getUser()

        Message.create({ name, message, user: user._id })

        return new Response(JSON.stringify({ message: 'Message Send Successfully' }), { status: 201 })

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 })
    }
}

export const GET = async () => {

    try {
        await connectToDb()
        const messages = await Message.find({}).populate('user')

        return new Response(JSON.stringify({ messages }), { status: 200 })

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 })
    }
}