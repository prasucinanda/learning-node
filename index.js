const Joi = require("joi");
const express = require("express");
const app = express();

app.request(express.json());

const genres = [
  { id: 1, name: "horor" },
  { id: 2, name: "comedy" },
  { id: 3, name: "thriller" },
  { id: 4, name: "romance" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Movie Land");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.post("/api/genres", (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

function validateMovie(genre) {
  const schema = {
    name: Joi.string().min(5).required(),
  };
  return Joi.validate(genre.schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
