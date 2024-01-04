const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: [
    {
      type: String,
      required: true,
    },
  ],
  product_head: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_color: {
    type: String,
    required: true,
  },
  product_type: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

const product = mongoose.model("Product", productSchema);
module.exports = product;
