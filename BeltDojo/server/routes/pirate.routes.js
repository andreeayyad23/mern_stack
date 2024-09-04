const pirateController = require('../controllers/pirate.controller');
module.exports = function(app){
  app.get('/api/pirates/all', pirateController.findAllPirates);
  app.post('/api/pirates/create', pirateController.createNewPirate);
  app.get('/api/pirates/:id', pirateController.findPirate);
  app.put('/api/pirates/update/:id', pirateController.updatePirate);
  app.delete('/api/pirates/delete/:id', pirateController.deletePirate);

};