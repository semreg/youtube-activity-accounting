const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ChannelSchema = new Schema({
  profile_id: {
    type: String,
    required: true,
    minlength: 24,
    maxlength: 24
  },

  channel_name: {
    type: String,
    required: true
  },

  price_list_id: {
    type: String,
    required: true,
    minlength: 24,
    maxlength: 24
  },

  advertising_agency_id: {
    type: String,
    required: true,
    minlength: 24,
    maxlength: 24
  },

  country: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true
  }
})

module.exports = Channel = mongoose.model('channels', ChannelSchema)