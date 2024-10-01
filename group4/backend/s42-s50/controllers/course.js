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
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    Course.findOne({name: req.body.name}).then(existingCourse => {
        if (existingCourse){
            return res.status(409).send(false);
        } else {
            return newCourse.save()
            .then(result => res.send(result))
            .catch(error => errorHandler(error, req, res));
        }
    }).catch(error => errorHandler(error, req, res));

    return newCourse.save()
    .then(result => res.send(result))
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
                // No courses available
                res.status(404).send(false);
            } else {
                // Courses available
                res.status(200).send(result);
            }
        })
        .catch(err => errorHandler(err, req, res));

};


//[SECTION] Retrieve all active courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
    2. Use the "then" method to send a response back to the client application based on the result of the "find" method
*/

module.exports.getAllActive = (req, res) => {
    Course.find({ isActive: true })
        .then(result => {
            if (result.length > 0) {
                // Active courses found
                return res.status(200).send(result);
            } else {
                // No active courses found
                return res.status(404).send({ message: 'No active courses found' });
            }
        })
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
    .then(course => {

        if (!course) {
            return res.status(404).send({ message: 'Course not found' });
        } else {
            res.status(200).send(course);
        }
        
    })
    .catch(error => errorHandler(error, req, res));
    
};



//[SECTION] Update a course
/*
    Steps: 
    1. Create an object containing the data from the request body
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. Use the "then" method to send a response back to the client application based on the result of the "find" method
*/

module.exports.updateCourse = (req, res) => {

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };

    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse, { new: true })
        .then(course => {
            if (course) {
                // If the course is found and updated successfully
                res.status(200).send({ success: true, message: 'Course updated successfully' });
            } else {
                // If the course is not found
                res.status(404).send({ message: 'Course not found' });
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
    const updateActiveField = { isActive: false };

    Course.findById(req.params.courseId)
        .then(course => {
            if (!course) {
                return res.status(404).send({ message: 'Course not found' });
            }
            
            if (!course.isActive) {
                return res.status(200).send({ course: course, message: 'Course already archived' });
            }

            return Course.findByIdAndUpdate(req.params.courseId, updateActiveField, { new: true });
        })
        .then(updatedCourse => {
            if (updatedCourse) {
                return res.status(200).send({ success: true, message: 'Course archived successfully' });
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

//start member 3 activate a course (s48)
module.exports.activateCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: true
    }

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            // Check if a course was found
            if (course) {
                // If course found, check if it was already activated
                if (course.isActive) {
                    // If course already activated, return a 200 status with a message indicating "Course already activated".
                    return res.status(200).send('Course already activated');
                }
                // If course not yet activated, return a 200 status with a boolean true.
                return res.status(200).send({message: 'Course acticated successfully'});
            } else {
                // If course not found, return a 404 status with a boolean false.
                return res.status(404).send({message: 'Course not found'});
            }
        })
        .catch(error => errorHandler(error, req, res));
};
//end member 3 activate a course