const Pirate = require("../models/pirate.model");

module.exports.findAllPirates = (req, res) => {
  Pirate.find()
    .then(allDaPirates => res.json(allDaPirates))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findPirate = (req, res) => {
	Pirate.findOne({ _id: req.params.id })
		.then(oneSinglePirate => res.json( oneSinglePirate ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewPirate = (req, res) => {
  Pirate.create(req.body)
  .then(result => res.json(result))
  .catch(err => res.status(400).json(err));
}


module.exports.updatePirate = (req, res) => {
  Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(updatedPirate => res.json({ Pirate: updatedPirate }))
    .catch(err => res.status(400).json(err));
};

module.exports.deletePirate = (req, res) => {
  Pirate.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

