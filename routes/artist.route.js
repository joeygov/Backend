const express = require('express');
const router = express.Router();

// Import the controller
const artist_controller = require('../controllers/artist.controller');


// Route definition for artist routes
router.post('/', artist_controller.create);
router.get('/', artist_controller.getAll);
router.get('/:artistId', artist_controller.getById);
router.delete('/:artistId', artist_controller.delete);

module.exports = router;