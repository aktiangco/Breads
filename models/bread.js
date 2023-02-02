// Creating a mongoose Shell
// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const {Schema} = mongoose 

// creating a shell
const breadSchema = new Schema({
  // specify data {type:   } 
  name: {type: String, required: true},
  hasGluten: Boolean, // doesn't required additional option
  image: { type: String, default: 'https://via.placeholder.com/500' },
  baker: {
    type: String,
    // Validation
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Pheobe']
  }
})

// Define the Instance Helper Method:

breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${this.baker}`
}

// Static Helper Method
breadSchema.static('getBreadsByBaker', function(bakerName) {
  return this.find({baker: bakerName})
})


// model and export
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
