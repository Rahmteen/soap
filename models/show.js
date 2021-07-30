// require mongoose and desctructure Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

// create a constant card cardModel, which will be object
const showSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

// export the model that we make
module.exports = mongoose.model("Show", showSchema);
