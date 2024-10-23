const express = require('express');
const { addVenue, getVenues, getOneVenues, updateVenue, deleteVenue ,uploadeImages } = require('../controllers/venueController');  // Ensure these are correctly imported

const router = express.Router();
const { checkToken } = require("../middleware/auth");

// Define routes for venues
router.post('/', checkToken,addVenue);        // Route for adding a new venue
router.get('/', getVenues);        // Route for retrieving venues
router.get("/:id", getOneVenues);
router.put('/:id', updateVenue);   // Route for updating a venue
router.delete('/:id', deleteVenue); // Route for deleting a venue

router.post("/images/:id", checkToken, uploadeImages);


module.exports = router;
