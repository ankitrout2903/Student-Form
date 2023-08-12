const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Course routes
router.post('/courses', courseController.createCourse);
router.get('/courses', courseController.getCourses);
// Other course routes can be added here

module.exports = router;
