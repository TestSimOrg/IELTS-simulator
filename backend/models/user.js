import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'

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

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const user = mongoose.model('user', userSchema);

export default user;