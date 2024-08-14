const { Player } = require('../models/team.model');

module.exports.createPlayer = (request, response) => {
    const { playerName, playerPosition } = request.body;
    Player.create({ playerName, playerPosition })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
};

module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
};


module.exports.findPlayer = (req, res) => {
	Player.findOne({ _id: req.params.id })
		.then(oneSinglePlayer => res.json( oneSinglePlayer ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
      .then(updatePlayer => res.json({ player: updatePlayer }))
      .catch(err => res.status(400).json(err));
  };

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};