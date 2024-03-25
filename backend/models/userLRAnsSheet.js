import mongoose from "mongoose";

const ansSchema = new mongoose.Schema({
    number : {
        type : Number,
        required : true,
    },
    answer : {
        type : String,
        required : true,
    }
});

const userLRAnsSheetSchema = new mongoose.Schema({
    ansArr: {
        type: [ansSchema],
        required: true,
    }
});


userLRAnsSheetSchema.pre('validate', function(next){
    if(this.ansArr.length !== 40){
        const err = new Error('number of answers should be 40');
        next(err);
    }else{
        next();
    }
});

const  userLRAnsSheet = mongoose.model('ansSheet', userLRAnsSheetSchema);
const  ans = mongoose.model('ans', ansSchema);

export default {ans, userLRAnsSheet};
