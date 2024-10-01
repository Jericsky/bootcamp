const Course = require('../models/course'); // Ensure the correct path

// Method to add a new course
exports.addCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.status(201).send(true);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Method to get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Method to get all active courses
exports.getAllActive = async (req, res) => {
    try {
        const activeCourses = await Course.find({ isActive: true });
        res.status(200).json(activeCourses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Method to get a specific course by ID
exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).send("Course not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Method to update a course
exports.updateCourse = async (req, res) => {
    try {
        const updates = req.body;
        const course = await Course.findByIdAndUpdate(req.params.courseId, updates, { new: true });
        if (course) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false); // Course not found
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
//member 4
module.exports.archiveCourse = (req, res) => {

    let updateActiveField = {
        isActive: false
    }

    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};
module.exports.getCourse = (reqBody) => {
    return Course.findById({_id: reqBody._id})
    .then((result) => result)
    .catch(err => err)
}

//member 5 end

//[SECTION] Activity: Retrieve all courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllCourses = (reqBody) => {

    return Course.find({})
    .then(result => result)
    .catch(err => err);

};