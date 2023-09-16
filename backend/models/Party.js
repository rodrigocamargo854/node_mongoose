const mongoose = require("mongoose");

const { Schema } = mongoose;
const {serviceSchema} = require("./Service")




const partySchema = new Schema(
    {
      ttle: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      description: {
        type: Number,
        required: true,
      },
      budget: {
        type: String,
        required: true,
      },
      service: {
        type: [serviceSchema]
      },

    },{timestamps:true}
  );


  const Party = mongoose.model("Party", partySchema)

  module.exports = Party