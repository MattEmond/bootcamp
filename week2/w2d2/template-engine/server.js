// server.js
// load what we need

const express = require('express')
const app = express()

// set view enjine to ejs
app.set("view engine", "ejs")

// use res.render to load up an ejs view file

// index page
app.get("/", (request, response) => {
  var drinks = [
    {name: 'Bloody Mary', drunkness: 3},
    {name: 'Martini', drunkness: 5},
    {name: 'Scotch', drunkness: 10}
  ]

  var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

  response.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  })
})

// about page
app.get('/about', (request, response) => {
  response.render('pages/about')
})

app.listen(8080)
console.log("8080 is the magic port")