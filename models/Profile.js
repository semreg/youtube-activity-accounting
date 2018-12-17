const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProfileSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },

  phone_number: {
    type: String,
    required: true,
    match: [/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/]
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)