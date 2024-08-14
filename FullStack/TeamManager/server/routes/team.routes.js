const PlayerController = require('../controllers/team.controller');
module.exports = function(app){
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.get("/api/players/:id", PlayerController.findPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
    app.put('/api/players/update/:id', PlayerController.updatePlayer);
}