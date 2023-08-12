const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  lessonPlans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LessonPlan',
    },
  ],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
