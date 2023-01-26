// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')


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
