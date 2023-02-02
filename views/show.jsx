const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
          <h3>{bread.name}</h3>

          {/* Form to delete */}
          <div>
          <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
          </form>
          </div>
            <p>
              It
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
          <p>Baked by {bread.baker}</p>
          
          

        </Default>
      )
  }
  

module.exports = Show
