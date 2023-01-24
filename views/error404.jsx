const React = require('react')
const Def = require('./layouts/default')

function error404 () {
    return (
      <Def>
          <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="https://httpstatusdogs.com/img/404.jpg" alt="404"></img>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404