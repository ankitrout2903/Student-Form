const express = require('express');
const router = express.Router();
const lessonPlanController = require('../controllers/lessonPlanController');

// Lesson Plan routes
router.post('/lesson-plans', lessonPlanController.createLessonPlan);
router.get('/lesson-plans/:courseId', lessonPlanController.getLessonPlansByCourse);
// Other lesson plan routes can be added here

module.exports = router;
