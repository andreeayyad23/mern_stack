const PlayerController = require('../controllers/team.controller');
module.exports = function(app){
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}