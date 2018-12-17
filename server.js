// Core imports
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// DB config
const db = require('./config/keys').mongoURI

// Routes
const api = require('./routes/api/router')

// Init Port
const port = process.env.PORT || 5000

// Connect to DB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected ...'))
  .catch(err => console.log(err))

// Init Express
const app = express()

// Body Parser middleware
app.use(bodyParser.json())

// Enable CORS for requests from client
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  
  next()
})

// Body Parser
app.use(bodyParser.json())

// Static Client Files   
app.use(express.static(`./client/build`))

// Api Requests
app.use('/api', api)

// Send All Other Requests To React Router
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`))

// Start Server
app.listen(port, () => console.log(`App started on port ${port} ...`))
