// Imports
const express = require('express')

// Init Router
const router = express.Router()

// Price List Schema
const AdvertisingAgency = require('../../models/AdvertisingAgency')

// @route GET /api/price_lists
// @desc Get Advertising gencies
// @access Public
router.get('/', (req, res) => {
  AdvertisingAgencies.find()
    .then(advertising_agencies => res.json(advertising_agencies))
})

// @route POST /api/advertising_agencies 
// @desc Create Advertising Agency
// @access Public
router.post('/', (req, res) => {
  const newAdvertisingAgency = new AdvertisingAgency({
    agency_name: req.body.agency_name
  })

  newAdvertisingAgency.save()
  .then(advertising_agency => res.json(advertising_agency))
  .catch(err => {
    res.send('Your data is invalid!')
    console.log(err)
  })
})

// @route DELETE /api/price_lists:id
// @desc DELETE Advertising Agency
// @access Public
router.delete('/:advertisingAgencyId', (req, res) => {
  AdvertisingAgencies.findById(req.params.advertisingAgencyId)
    .then(agency => agency.remove().then(() => res.send('Agency successfully deleted')))
    .catch(err => res.sendStatus(404).send('Agency not found'))
})

module.exports = router
