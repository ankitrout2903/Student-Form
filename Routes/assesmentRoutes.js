const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController');

// Assessment routes
router.post('/assessments', assessmentController.createAssessment);
// Other assessment routes can be added here

module.exports = router;
