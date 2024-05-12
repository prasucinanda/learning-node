const Joi = require("joi");
const express = require("express");
const app = express();

//app.request(express.json());

const genres = [
  { id: 1, genre: "horor" },
  { id: 2, genre: "comedy" },
  { id: 3, genre: "thriller" },
  { id: 4, genre: "romance" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Movie Land");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
