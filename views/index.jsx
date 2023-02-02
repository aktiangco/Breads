const React = require('react') /* To run JSX */
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
            <h2>Index Page</h2>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
            {/* This is a JSX comment */}
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread) => { // taking out index
                        return (// adding 
                            <li key={bread.id}>                                
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}
                                </a>
                        </li>)
                    })
                }
            </ul>
      </Default>
    )
}

module.exports = Index
