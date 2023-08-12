const express = require("express");
const bodyParser = require("body-parser");
const db = require("../config/db");

const app = express();

app.use(bodyParser.json());

// Import the MongoDB configuration from config/db.js
const { mongoURI } = require("./config/db");

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verify the MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define your routes and other app configurations here

// Example route to handle root URL
app.get("/", (req, res) => {
  res.send("Welcome to the educational courses API!");
});

const courseRoutes = require("./routes/courseRoutes");
const lessonPlanRoutes = require("./routes/lessonPlanRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");

// Use the route files
app.use("/api", courseRoutes);
app.use("/api", lessonPlanRoutes);
app.use("/api", assignmentRoutes);
app.use("/api", assessmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
