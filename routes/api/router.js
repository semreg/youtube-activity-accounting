// Imports
const express = require('express')

// Init router
const router = express.Router()

// Use Routes
router.use('/profiles', require('./profiles'))
router.use('/channels', require('./channels'))
router.use('/price_lists',  require('./priceLists'))
router.use('/advertising_agencies', require('./advertising_agencies'))

module.exports = router
