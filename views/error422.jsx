const React = require('react')
const Def = require('./layouts/default')

function error422 () {
    return (
      <Def>
          <main>
                <h1>GOTCHA!!!</h1>
                <img src="https://httpstatusdogs.com/img/422.jpg" alt="422"></img>
              <h2>You sly dog</h2>
          </main>
      </Def>
    )
  }
  

module.exports = error422