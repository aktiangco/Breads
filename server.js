// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views') // double underscore "__dirname" = dunder-score
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // Setup serving static assets
app.use(express.urlencoded({ extended: true })) //send our POST request
app.use(methodOverride('_method')) // allows to override form default

// ROUTES
app.get('/', (req, res) => {
    res.redirect('/breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
// Bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)


// 404 Page
app.get('*', (req, res) => {
    res.render('error404') // 404 Not Found
});



// LISTEN to MONGO 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`connected to mongo: ${process.env.MONGO_URI}`)
})
// LISTEN to localhost:PORT
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})

module.exports = app