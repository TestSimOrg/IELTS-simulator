import mongoose from "mongoose";


const ansSheetSchema = new mongoose.Schema({
    number : {
        type : Number,
        required : true,
    },
    ansType : {
        type: String,
        enum: ['S', 'M','L','IEO'],
        required: true
    },
    qPair : {
        type : [String]
    },
    ans : {
        type: Schema.Types.Mixed,
        validate: {
          validator: function(value) {
            if (!Array.isArray(value)) {
              return typeof value === 'string';
            } else {
              return value.every(item => typeof item === 'string');
            }
          },
          message: props => `${props.value} is not a valid type for yourField. It should be a string or an array of strings.`
        },
        required: true
      }
});

const  ansSheet = mongoose.model('ansSheet', ansSheetSchema);

export default ansSheet;
