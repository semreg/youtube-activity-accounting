// Imports
const express = require('express')

// Init Router
const router = express.Router()

// Channel Schema
const Channel = require('../../models/Channel')

// @route GET /api/channels
// @desc Get All Channels
// @access Public
router.get('/', (req, res) => {
  Channel.find()
    .then(channels => res.json(channels))
})

// @route POST /api/channels
// @desc Create New Channel
// @access Public
router.post('/', (req, res) => {
  const newChannel = new Channel({
    profile_id: req.body.profile_id,
    channel_name: req.body.channel_name,
    price_list_id: req.body.price_list_id,
    advertising_agency_id: req.body.advertising_agency_id,
    country: req.body.country,
    subject: req.body.subject
  })

  newChannel.save()
  .then(channel => res.json(channel))
  .catch(err => {
    res.send('Your data is invalid!')
  })
})

// @route DELETE /api/channels:id
// @desc DELETE Channels
// @access Public
router.delete('/:chhannelId', (req, res) => {
  Channel.findById(req.params.channelId)
    .then(channel => channel.remove().then(() => res.send('Channel successfully deleted')))
    .catch(err => res.sendStatus(404).send('Channel not found'))
})

module.exports = router
