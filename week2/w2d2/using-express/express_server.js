const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default is 8080

var urlDatabase = {
  "b2xVn2": "http://lighthouselabs.ca",
  "9sm5xk": "http://www.google.com"
};

app.get("/", (request, response) => {
  response.end("Hello!");
});

app.get("/urls.json", (request, response) => {
  response.json(urlDatabase);
});

app.get("/hello", (request, response) => {
  response.end("<html><body>Hello <b>World</b></body></html>\n")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
