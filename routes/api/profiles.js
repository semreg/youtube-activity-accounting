// Imports
const express = require('express')

// Init Router
const router = express.Router()

// Profile Schema
const Profile = require('../../models/Profile')

// @route GET /api/profiles
// @desc Get All Profiles
// @access Public
router.get('/', (req, res) => {
  Profile.find()
    .then(profiles => res.json(profiles))
})

// @route POST /api/profiles
// @desc Create New User
// @access Public
router.post('/', (req, res) => {
  const newProfile = new Profile({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number 
  })

  newProfile.save()
    .then(profile => res.json(profile))
    .catch(err => res.send('Your data is invalid!'))
})

// @route DELETE /api/profiles:id
// @desc DELETE Profile
// @access Public
router.delete('/:profileId', (req, res) => {
  Profile.findById(req.params.profileId)
    .then(profile => profile.remove().then(() => res.send('Profile successfully deleted')))
    .catch(err => res.sendStatus(404).send('Profile not found'))
})

module.exports = router
