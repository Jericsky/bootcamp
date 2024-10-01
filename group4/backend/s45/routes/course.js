const express = require("express");
const courseController = require("../controllers/course");
const auth = require("../auth");
const errorHandler = require("../middleware/errorHandler");

const { verify, verifyAdmin } = auth;

const router = express.Router();
// routes/course.js
router.post("/", verify, verifyAdmin, courseController.addCourse, errorHandler);
router.get("/all", verify, verifyAdmin, courseController.getAllCourses, errorHandler);
router.get("/", courseController.getAllActive, errorHandler);
router.get("/specific/:id", courseController.getCourse, errorHandler);
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse, errorHandler);
router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);
router.post("/specific", (req, res) => {
    courseController.getCourse(req.body).then(resultFromController => res.send(resultFromController));
});

module.exports = router;
