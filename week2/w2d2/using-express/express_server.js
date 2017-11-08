const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default is 8080

app.set("view engine", "ejs")

// url database
const urlDatabase = {
  "b2xVn2": {
    longURL: "http://lighthouselabs.ca"
  },
  "9sm5xk": {
    longURL: "http://www.google.com"
  },
};
// generate random url id
function generateRandomString() {
  return Math.random().toString(36).substr(2, 6)
}

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// urls_new.ejs
app.get("/urls/new", (request, response) => {
  response.render("urls_new");
});

// take in url from the new page and then generate a random ID
app.post("/urls", (request, response) => {
  console.log(request.body); // debug statement to see POST parameters
  var id = generateRandomString();
  // result of check of if the request.body (longURL) has http://, if not, add to
  // the beginning of reuqest.body (look up regex...regular expression)
  urlDatabase[id] = request.body
  response.redirect("/urls/" + id);
})

// used to handle shortURL requests
app.get("/u/:shortURL", (request, response) => {
   let shortURL = request.params.shortURL
   let longURL = urlDatabase[shortURL].longURL
   response.redirect(longURL)
})

// list of all urls
app.get("/urls", (request, response) => {
  let templateVars = { urls: urlDatabase};
  response.render("urls_index", templateVars);
});

app.get("/urls/:id", (request, response) => {
  let templateVars = {
    shortURL: request.params.id,
    longURL: urlDatabase[request.params.id].longURL
  };
  response.render("urls_show", templateVars);
});

app.get("/urls.json", (request, response) => {
  response.json(urlDatabase);
});

app.get("/hello", (request, response) => {
  response.end("<html><body>Hello <b>World</b></body></html>\n")
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

generateRandomString()

