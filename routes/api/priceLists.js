// Imports
const express = require('express')

// Init Router
const router = express.Router()

// Price List Schema
const PriceList = require('../../models/PriceList')

// @route GET /api/price_lists
// @desc Get All Price Lists
// @access Public
router.get('/', (req, res) => {
  PriceList.find()
    .then(price_list => res.json(price_list))
})

// @route POST /api/channels
// @desc Create New Price List
// @access Public
router.post('/', (req, res) => {
  const newPriceList = new PriceList({
    exclusive_price: req.body.exclusive_price,
    integration_price: req.body.integration_price,
    mention_price: req.body.mention_price,
    pre_post_roll_price: req.body.pre_post_roll_price
  })

  newPriceList.save()
  .then(price_list => res.json(price_list))
  .catch(err => {
    res.send('Your data is invalid!')
  })
})

// @route DELETE /api/price_lists:id
// @desc DELETE Price List
// @access Public
router.delete('/:priceListId', (req, res) => {
  PriceList.findById(req.params.priceListId)
    .then(channel => channel.remove().then(() => res.send('Price list successfully deleted')))
    .catch(err => res.sendStatus(404).send('Price list not found'))
})

module.exports = router
