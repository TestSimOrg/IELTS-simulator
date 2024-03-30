import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const answerSchema = new mongoose.Schema({
    
  number:{
    type: Number,
    required: true,
  },
  ansType : {
    type: String,
    enum: ['S', 'M','L','O1','O2','IEO','B1','B2'],
    required: true
  },
  qPair : {
    type : [String],
    required: function(){
      return this.ansType === 'IEO';
    }
  }, // 'YES', 'NO', 'NG'
  ans: {
    type: Schema.Types.Mixed,
    required: true,
  }
})

answerSchema.pre('validate', function(next) {
  const ansType = this.ansType;
  const ans = this.ans;
  const number = this.number;

  // Validate ans based on ansType
  if (ansType === 'S' || ansType === 'L' || ansType === 'B1') {
    if (typeof ans !== 'string') {
      log.debug(`Invalid data type for ans num ${number}`)
      return next(new Error(`Invalid data type for ans num ${number}`));
    }
  } else if (ansType === 'M' || ansType === 'IEO' || ansType === 'B2') {
    if (!Array.isArray(ans) || !ans.every(item => typeof item === 'string')) {
      log.debug(`Invalid data type for ans num ${number}`)
      return next(new Error(`Invalid data type for ans num ${number}`));
    }
  }else if(ansType === 'O1'){
    if(!(typeof ans === 'string') || (!(ans === 'YES') && !(ans === 'NO') && !(ans === 'NG'))){
      log.debug(`Invalid data type for ans num ${number}`)
      return next(new Error(`Invalid data type for ans num ${number}`));
    }
  }else if(ansType === 'O2'){
    if(!(typeof ans === 'string') || (!(ans === 'TRUE') && !(ans === 'FALSE') && !(ans === 'NG'))){
      log.debug(`Invalid data type for ans num ${number}`)
      return next(new Error(`Invalid data type for ans num ${number}`));
    }
  }

  next();
});

const answer = mongoose.model('answer', answerSchema);
export default answer;