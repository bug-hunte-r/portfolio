import mongoose from "mongoose"

const userSchmea = mongoose.Schema({
    username: {
        required: true,
        type: String,
    },

    email: {
        required: true,
        type: String,
    },

    password: {
        required: true,
        type: String,
    },

    role: {
        required: true,
        type: String,
    }
},
    { timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', userSchmea)

export default User