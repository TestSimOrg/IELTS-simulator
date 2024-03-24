import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    data: Buffer, 
    contentType: String,
    required : true
});

const image = mongoose.model('image', imageSchema)
export default image;