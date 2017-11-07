

const http = require('http');

http.createServer((request, response) => {

  const {headers, method, url} = request;

  let body = [];
  request.on('error', (err) => {
    console.error(err.stack);
  });
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = buffer.concat(body).toString();
  });

  response.on('error', (err) => {
    console.error(err);

  response.statusCode = 200
  response.setHeader('Content-Type', "application/json");

  const responseBody = {headers, method, url, body}

  response.write(JSON.stringify(responseBody));
  response.end()

  })
}).listen(8080);




// ECHO SERVER -----  Sends whatever data is recieved in the request right back
// to the response


const http = require('http')

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080)