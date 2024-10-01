//[SECTION] Activity: Dependencies and Modules
const Course = require("../models/Course");
const { errorHandler } = require("../auth");
//[SECTION] Activity: Create a course
/*
    Steps: 
    1. Instantiate a new object using the Course model and the request body data
    2. Save the record in the database using the mongoose method "save"
    3. Use the "then" method to send a response back to the client appliction based on the result of the "save" method
*/

//try-catch
/*
module.exports.addCourse = (req, res) => {

    try {
            let newCourse = new Course({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price
        });

        return newCourse.save()
        .then(result => res.send(result))
        .catch(err => res.send(err))
    } catch (err) {
        res.send("Error in Variables");
    }

    
}; 
*/

module.exports.addCourse = (req, res) => {
    let newCourse = new Course({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    return newCourse.save()
        .then(result => res.status(201).send(result)) // Use 201 Created on successful course creation
        .catch(error => errorHandler(error, req, res)); 
};


//[SECTION] Activity: Retrieve all courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllCourses = (req, res) => {
    return Course.find({})
        .then(result => {
            if (result.length === 0) {
                return res.status(404).send({ success: false, message: 'No courses found' }); // 404 if no courses found
            }
            return res.status(200).send(result); // 200 OK if courses are found
        })
        .catch(error => errorHandler(error, req, res)); 
};

//[SECTION] Retrieve all active courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true })
    .then(result => res.send(result))
    .catch(error => errorHandler(error, req, res));

};

//[SECTION] Retrieve a specific course
/*
    Steps: 
    1. Retrieve a course using the mongoose "findById" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getCourse = (req, res) => {

    Course.findById(req.params.id)
    .then(course => res.send(course))
    .catch(error => errorHandler(error, req, res));
    
};

//[SECTION] Update a course
/*
    Steps: 
    1. Create an object containing the data from the request body
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.updateCourse = (req, res)=>{

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] Archive a course
/*
    Steps: 
    1. Create an object and with the keys to be updated in the record
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. If a course is updated send a response of "true" else send "false"
    4. Use the "then" method to send a response back to the client appliction based on the result of the "findByIdAndUpdate" method
*/
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


//[SECTION] Activate a course
/*
    Steps: 
    1. Create an object and with the keys to be updated in the record
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. If the user is an admin, update a course else send a response of "false"
    4. If a course is updated send a response of "true" else send "false"
    5. Use the "then" method to send a response back to the client appliction based on the result of the "findByIdAndUpdate" method
*/
module.exports.activateCourse = (req, res) => {

    let updateActiveField = {
        isActive: true
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