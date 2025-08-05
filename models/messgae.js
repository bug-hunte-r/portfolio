import mongoose from "mongoose"
import User from "./user"

const messageSchmea = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },

    message: {
        required: true,
        type: String,
    },

    user: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }
)

const Message = mongoose.models.Message || mongoose.model('Message', messageSchmea)

export default Message