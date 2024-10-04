const express = require('express');
const { addVenue, getVenues, updateVenue, deleteVenue } = require('../controllers/venueController');  // Ensure these are correctly imported

const router = express.Router();

// Define routes for venues
router.post('/', addVenue);        // Route for adding a new venue
router.get('/', getVenues);        // Route for retrieving venues
router.put('/:id', updateVenue);   // Route for updating a venue
router.delete('/:id', deleteVenue); // Route for deleting a venue

module.exports = router;
