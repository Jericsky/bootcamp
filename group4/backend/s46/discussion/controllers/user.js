const bcrypt = require('bcrypt');

const User = require("../models/User");
const Enrollment = require("../models/Enrollment");

const auth = require("../auth");
const { errorHandler } = auth;

//[SECTION] Check if the email already exists

/*

MINI ACTIVITY

Update the “checkEmailExists” to add status codes
- if there is a duplicate email, send true with 409 http status back to the client
- if there is no duplicate email, send false with 404 http status back to the client
- if an error occured in the .catch(), send the error with the 500 http status back to the client

*/
module.exports.checkEmailExists = (req, res) => {
    return User.find({ email : req.body.email })
    .then(result => {

        // if there is a duplicate email (email exists)
        if (result.length > 0) {
            return res.status(409).send(true);
        } else { // if there is no duplicate email
            return res.status(404).send(false);
        };
    })
    .catch(error => errorHandler(error, req, res));
};


//[SECTION] User registration
module.exports.registerUser = (req, res) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    return newUser.save()
        .then((result) => res.status(201).send(result)) // Use 201 Created for successful registration
        .catch(error => errorHandler(error, req, res)); 
};
//[SECTION] User authentication
module.exports.loginUser = (req, res) => {
    return User.findOne({ email: req.body.email })
        .then(result => {
            if (result == null) {
                return res.status(404).send({ success: false, message: 'User not found' }); // Use 404 Not Found if user doesn't exist
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    return res.status(200).send({ access: auth.createAccessToken(result) }); // Use 200 OK for successful login
                } else {
                    return res.status(401).send({ success: false, message: 'Invalid credentials' }); // Use 401 Unauthorized for wrong password
                }
            }
        })
        .catch(error => errorHandler(error, req, res)); // Assuming your errorHandler handles the appropriate status codes
};



//[Section] Activity: Retrieve user details
/*
    Steps:
    1. Retrieve the user document using it's id
    2. Change the password to an empty string to hide the password
    3. Return the updated user record
*/
module.exports.getProfile = (req, res) => {

    return User.findById(req.user.id)
    .then(user => {
        user.password = "";
        return res.status(200).send(user);
    })
    .catch(error => errorHandler(error, req, res));
};


module.exports.enroll = (req, res) => {

    // user's id from the decoded token after verify()
    console.log(req.user.id);

    // enrolled courses of the user from the request body
    console.log(req.body.enrolledCourses);

    if(req.user.isAdmin){
        return res.status(403).send(false);
    }

    let newEnrollment = new Enrollment({
        userId: req.user.id,
        enrolledCourses: req.body.enrolledCourses,
        totalPrice: req.body.totalPrice
    });


    return newEnrollment.save().then(enrolled =>{
        return res.status(201).send(true);
    })
    .catch(error => errorHandler(error, req, res));

}

module.exports.getEnrollments = (req, res) => {
    Enrollment.find({})
        .then(enrollments => {
            if (!enrollments.length) {
                return res.status(404).send({ success: false, message: "No enrollments found." });
            }

            res.status(200).send({ enrollments: enrollments });
        })
        .catch(err => {
            res.status(500).send({  error: err.message });
        });
};