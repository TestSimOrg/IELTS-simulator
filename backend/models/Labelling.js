import mongoose from "mongoose";
import image from './image'
const labellingSchema = new mongoose.Schema({
    questionOptions: {
        type: [String],
        required: true
    },
    image: image,
    questionStatements : {
        type: [String],
        required: true
    }
});


const labellingQuestion = mongoose.model('labellingQuestion', labellingSchema);
const image = mongoose.model('image', imageSchema);

export default labellingQuestion