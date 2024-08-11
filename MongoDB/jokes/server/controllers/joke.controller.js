const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allTheJokes => 
        res.json({ jokes: allTheJokes })
    )
    .catch(err => 
        res.json({ message: "Something wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => 
            res.json({ joke: oneSingleJoke }))
		.catch(err => 
            res.json({ message: "Something wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => 
        res.json({ joke: newlyCreatedJoke }))
    .catch(err => 
        res.json({ message: "Something wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, 
    { new: true })
    .then(updatedUser => 
        res.json({ joke: updatedUser }))
    .catch(err => 
        res.json({ message: "Something wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => 
        res.json({ result: result }))
    .catch(err => 
        res.json({ message: "Something wrong", error: err }));
};