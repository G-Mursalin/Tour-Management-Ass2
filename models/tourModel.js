const mongoose = require("mongoose");
// Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  duration: {
    type: Number,
  },
  maxGroupSize: {
    type: Number,
  },
  difficulty: {
    type: String,
  },
  ratingsAverage: {
    type: Number,
    required: [true, "A tour must have a  ratingsAverage"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  summary: {
    type: String,
    trim: true,
  },
  image: String,
  views: {
    type: Number,
  },
});

// Model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
