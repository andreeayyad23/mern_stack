const AuthorController = require("../controllers/author.controller");

module.exports = app => {
  app.get("/api/authors/", AuthorController.findAllAuthors);
  app.get("/api/authors/:id", AuthorController.findAuthor);
  app.put("/api/authors/update/:id", AuthorController.updateAuthor);
  app.post("/api/authors/new", AuthorController.createNewAuthor);
  app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
};