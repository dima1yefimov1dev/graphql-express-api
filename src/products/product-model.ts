import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    maxLength: 100,
  },

  price: {
    type: String,
    required: true,
  }
})

export const Product = mongoose.model('Product', ProductSchema);