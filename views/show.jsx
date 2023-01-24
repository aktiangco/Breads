const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
              <h2>Show Page</h2>
              <p>
                  and it
                  {
                      bread.hasGluten
                      // Ternary operator
                      // if (some condition) 
                      // {' '} to add a space in between    
                          ? <span> does </span> // ? = (true)
                          : <span> does NOT</span> // : = false)
                  }
                  {' '}have gluten.  
              </p>
          <h3>{bread.name}</h3>
          <img src={bread.image} alt={bread.name} />
        </Default>
      )
  }
  

module.exports = Show
