const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Assignment routes
router.post('/assignments', assignmentController.createAssignment);
// Other assignment routes can be added here

module.exports = router;
