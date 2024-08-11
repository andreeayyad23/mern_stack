const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/jokes/:id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke);
};