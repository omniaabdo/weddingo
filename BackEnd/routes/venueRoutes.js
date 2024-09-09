const express = require('express');
const { createVenue, getVenues, updateVenue, deleteVenue } = require('../controllers/venueController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createVenue);
router.get('/', getVenues);
router.put('/:id', auth, updateVenue);
router.delete('/:id', auth, deleteVenue);

module.exports = router;
