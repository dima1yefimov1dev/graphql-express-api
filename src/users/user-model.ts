import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 15,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 10,
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  }
});

export const User = mongoose.model('User', UserSchema);