const Assessment = require('../models/Assessment');

// Controller methods for Assessment
const createAssessment = async (req, res) => {
  try {
    const { title, description, courseId } = req.body;
    const assessment = new Assessment({ title, description, courseId });
    await assessment.save();
    res.status(201).json(assessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other controller methods (getAssessmentsByCourse, updateAssessment, deleteAssessment) can be added

module.exports = {
  createAssessment,
  // Export other assessment controller methods here
};
