const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default is 8080

app.set("view engine", "ejs")

const urlDatabase = {
  "b2xVn2": {
    longURL: "http://lighthouselabs.ca"
  },
  "9sm5xk": {
    longURL: "http://www.google.com"
  }
};


// home page
// app.get("/", (request, response) => {

// })

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
