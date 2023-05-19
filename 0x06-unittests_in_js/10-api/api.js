// API file

const express = require("express");
const bodyParser = require("body-parser");
const port = 7865;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.statusCode = 404;
    res.send("Not a number");
  } else {
    res.statusCode = 200;
    res.send(`Payment methods for cart ${id}`);
  }
});

app.get("/available_payments", (req, res) => {
  res.statusCode = 200;
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const username = req.body.userName;
  res.statusCode = 200;
  res.send(`Welcome ${username}`);
});

app.listen(port, () => console.log("API available on localhost port 7865"));
