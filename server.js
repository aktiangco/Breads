// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views') // double underscore "__dirname" = dunder-score
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // Setup serving static assets


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.render('error404') // 404 Not Found
});
  

// LISTEN
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})
