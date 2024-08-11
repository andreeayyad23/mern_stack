const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then(allDaAuthors => res.json(allDaAuthors))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json( oneSingleAuthor ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
  .then(result => res.json(result))
  .catch(err => res.status(400).json(err));
}


module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};