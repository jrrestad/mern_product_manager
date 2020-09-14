const homeController = require('../controllers/homeController');

module.exports = app => {
    app.get('/api/product/:id', homeController.getOne);
    app.get('/api/product', homeController.getAll);
    app.post('/api/product', homeController.new);
    app.patch('/api/update/:id', homeController.update);
    app.delete('/api/delete/:id', homeController.delete);
}