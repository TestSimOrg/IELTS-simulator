import mongoose, { Schema } from "mongoose";


const listeningAnsSheetSchema =  new mongoose.Schema({
    
  number:{
    type: Number,
    required: true
  },
  answer: {
    type: Schema.ObjectId,
    ref: 'answer'
  }
})
const  listeningAnsSheet = mongoose.model('ansSheet', listeningAnsSheetSchema);

export default listeningAnsSheet;
