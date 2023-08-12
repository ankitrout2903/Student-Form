const LessonPlan = require('../models/LessonPlan');

// Controller methods for LessonPlan
const createLessonPlan = async (req, res) => {
  try {
    const { title, content, courseId } = req.body;
    const lessonPlan = new LessonPlan({ title, content, courseId });
    await lessonPlan.save();
    res.status(201).json(lessonPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLessonPlansByCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const lessonPlans = await LessonPlan.find({ courseId });
    res.status(200).json(lessonPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other controller methods (updateLessonPlan, deleteLessonPlan) can be added

module.exports = {
  createLessonPlan,
  getLessonPlansByCourse,
  // Export other lesson plan controller methods here
};
