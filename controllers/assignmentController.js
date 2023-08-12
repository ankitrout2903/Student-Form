const Assignment = require('../models/Assignment');

// Controller methods for Assignment
const createAssignment = async (req, res) => {
  try {
    const { title, description, courseId } = req.body;
    const assignment = new Assignment({ title, description, courseId });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other controller methods (getAssignmentsByCourse, updateAssignment, deleteAssignment) can be added

module.exports = {
  createAssignment,
  // Export other assignment controller methods here
};
