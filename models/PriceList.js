const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PriceListSchema = new Schema({
  exclusive_price: {
    type: Number,
    required: true,
  },

  integration_price: {
    type: Number,
    required: true,
  },

  mention_price: {
    type: Number,
    required: true,
  },

  pre_post_roll_price: {
    type: Number,
    required: true,
  },
})

module.exports = PriceList = mongoose.model('price_list', PriceListSchema)