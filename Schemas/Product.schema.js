const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  sub_description: {
    type: String,
  },
  description: {
    type: String,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  available: {
    type: Boolean,
    default: true,
  },
  sizes: {
    type: Array,
    default: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  },
  colors: {
    type: ["String"],
  },
  price: {
    type: Number,
  },
  images: {
    type: ["String"],
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Products", productSchema);
