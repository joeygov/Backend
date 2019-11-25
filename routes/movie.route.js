const express = require('express');
const router = express.Router();

// Import the controller
const movie_controller = require('../controllers/movie.controller');

// Route definition for movies routes
router.post('/', movie_controller.create);
router.get('/', movie_controller.getAll);
router.get('/:movieId', movie_controller.getById);
router.delete('/:movieId', movie_controller.delete);
router.put('/:movieId/actors', movie_controller.addActor);
router.delete('/:movieId/actors/:actorId', movie_controller.removeActor);

module.exports = router;