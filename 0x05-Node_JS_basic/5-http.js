// More complex server with routing
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
// const readFileAsync = require('./3-read_file_async');
const readSync = require('./2-read_file');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // const response = readSync(database);
    // res.end(`This is the list of our students\n${response}`);
    // res.setHeader("Content-Type", "text/plain");
    // res.end(response);

    let output = '';

    // Override console.log to capture the output
    const originalLog = console.log;
    console.log = function (message) {
      output += `${message}`;
    };

    readSync(database);

    // Restore the original console.log
    console.log = originalLog;
    res.end(`This is the list of our students\n${output}`);

    // res.end("This is the list of our students");
    // readFileAsync(database)
    //   .then((data) => {
    //     res.end(`This is the list of our students\n${data}`);
    //   })
    //   .catch((err) => {
    //     res.end(err);
    //   });
  }
});

app.listen(port, hostname);

module.exports = app;
