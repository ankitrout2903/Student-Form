const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  // Other fields specific to the assessment
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
