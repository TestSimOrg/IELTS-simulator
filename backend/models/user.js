import mongoose, { Schema } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'username required.'],
    },
    email: {
        type: String,
        required: [true, 'email required.'],
        unique: [true, 'There is a user registered with this email already.'],
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: [true, 'password required.'],
        minlength: [6, 'Minimum length of password should be 6 characters.'],
    }
})

const user = mongoose.model('user', userSchema);

export default user;