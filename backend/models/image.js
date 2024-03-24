import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    data: Buffer, 
    contentType: String,
    required : true
});

export default image = mongoose.model('image', imageSchema)