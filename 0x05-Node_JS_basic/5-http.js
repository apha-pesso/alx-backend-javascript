// More complex server with routing
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const readFileAsync = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // res.end("This is the list of our students");
    readFileAsync(database)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.end(err);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
