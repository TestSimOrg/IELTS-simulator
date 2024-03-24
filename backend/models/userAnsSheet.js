import mongoose from "mongoose";


const userAnsSheetSchema = new mongoose.Schema({
    number : {
        type : Number,
        required : true,
    },
    ans : {
        type : String,
        required : true,
    }
});

const  userAnsSheet = mongoose.model('ansSheet', userAnsSheetSchema);

export default userAnsSheet;
