const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const seeds = require("../models/seed") // seeds array


// INDEX
breads.get('/', (req, res) => {
  Bread.find({},[], {sort: {name: 1}}) // Sort by name by ascii  "1 = a-z" "-1 = z-a"
    .then((foundBreads) => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
    })
  // res.render('index',
  //       {
  //           breads: Bread,
  //           title: 'Index Page'
  //       }
  //   )
  //   // res.send(Bread)
})
// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    // if(!req.body.name){} // to validate on server
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })
  
  
// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('edit', {
        bread: foundBread
      })
  })   
})


// SHOWS 
breads.get('/:id', (req, res) => {
    // //res.send(Bread[req.params.arrayIndex])
    // const breadIndex = req.params.arrayIndex;
    // const currentBread = Bread[breadIndex]; 
  Bread.findById(req.params.id)
    .then(foundBread => {
      Bread.getBreadsByBaker(foundBread.baker)
        .then(bakersBread => {
          // const bakedBy = foundBread.getBakedBy()
          // console.log(bakedBy)
          res.render('show', {
            bread: foundBread,
            bakersBread,
        })
      })
    })
    .catch(error => {
      res.render('error404')
    })
  
    // if (!currentBread) { //falsy
    //     res.render('error404')
    // } else {
    //     res.render('Show', {
    //         bread: currentBread,
    //         index: breadIndex
    //     })
    // }
})


// DELETE
breads.delete('/:id', (req, res) => {
    // start (2), delete
    // Bread.splice(req.params.indexArray, 1)
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      console.log(deletedBread)
        res.status(303).redirect('/breads')
    })   
  })
  
// UPDATE
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  // Bread[req.params.arrayIndex] = req.body
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((updatedBread) => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
    .catch(error => {
      res.render('error422', {
        error
    })
  })
})
  
// CREATING a SEED Route
breads.get('/data/seed', (req, res) => {
  Bread.insertMany(seeds) // line 4 to get to the array
    .then(createdBreads => {
      res.redirect('/breads')
    })
})




module.exports = breads