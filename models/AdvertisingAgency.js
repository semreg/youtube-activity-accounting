const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AdvertisingAgenciesSchema = new Schema({
  agency_name: {
    type: String,
    required: true
  }
})

module.exports =  AdvertisingAgencies = mongoose.model('advertising_agency', AdvertisingAgenciesSchema)