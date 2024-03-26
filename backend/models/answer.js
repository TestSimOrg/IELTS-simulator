import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    
    ansType : {
      type: String,
      enum: ['S', 'M','L','IEO','B'],
      required: true
    },
    qPair : {
      type : [String],
      required: function validate(){
          return this.ansType === IEO;
      }
    },
    ans: {
      type: function typeReturn(){
        if(this.ansType === 'S' || this.ansType === 'L' || this.ansType === 'B'){
          return String;
        }else if(this.ansType === 'M' || this.ansType === 'IEO'){
          return [String];
        }
      },
      required: true
    }
})

const answer = mongoose.model('answer', answerSchema);
export default answer;