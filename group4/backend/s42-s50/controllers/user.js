const bcrypt = require('bcrypt');
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");
const auth = require("../auth");

//[SECTION] Check if the email already exists

module.exports.checkEmailExists = (req, res) => {

    if (req.body.email.includes("@")) {
        return User.find({ email : req.body.email })
        .then(result => {
            // if there is a duplicate email
            if (result.length > 0) {
                return res.status(409).send(true);
            } else {
                return res.status(404).send(false);
            };
            
        })
        .catch(err => err);
    } else {

        res.status(400).send(false); //false - invalid email
    }


};

//try

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

//start member 3 register a user(s48)
//[SECTION] User registration
module.exports.registerUser = (req, res) => {

    // Checks if the email is in the right format
    if (!req.body.email.includes("@")){
        return res.status(400).send({message: 'Invalid email format'});
    }
    // Checks if the mobile number has the correct number of characters
    else if (req.body.mobileNo.length !== 11){
        return res.status(400).send({message: 'Mobile number is invalid'});
    }
    // Checks if the password has atleast 8 characters
    else if (req.body.password.length < 8) {
        return res.status(400).send({message: 'Password must be atleast 8 characters long'});
    // If all needed requirements are achieved
    } else {
        let newUser = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            mobileNo : req.body.mobileNo,
            password : bcrypt.hashSync(req.body.password, 10)
        })

        return newUser.save()
        .then((result) => {
            return res.status(201).send({message: 'User registered successfully'})
        })
        .catch(error => errorHandler(error, req, res));
    }
};
// end member 3 register a user

//start member 4 login a user(s48)
//[SECTION] User authentication
module.exports.loginUser = (req, res) => {
    if(req.body.email.includes("@")){
        return User.findOne({ email : req.body.email })
        .then(result => {
            if(result == null){
                return res.send({message: 'No email found'});
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    return res.send({ access : auth.createAccessToken(result), message: 'User logged in successfully'});
                } else {
                    return res.send({message: 'Incorrect email or password'});
                }
            }
        })
         .catch(error => errorHandler(error, req, res));
    }
    else{
        return res.status(400).send({message: 'Invalid email format'});
    }
};
//end member 4 login a user


// if res == true {
//     output success message box
// } else {
//     output error
// }

//[Section] Activity: Retrieve user details
/*
    Steps:
    1. Retrieve the user document using it's id
    2. Change the password to an empty string to hide the password
    3. Return the updated user record
*/
//start member 4 (s48)
module.exports.getProfile = (req, res) => {

    return User.findById(req.user.id)
    .then(user => {
        if (user){
            user.password = "";
            return res.status(200).send(user);
        } else {
            return res.status(404).send({message: 'User not found'})
        }
        
    })
    .catch(error => errorHandler(error, req, res));
};
//end member 4 get profile (s48)



//member 5 
module.exports.enroll = (req, res) => {

    // user's id from the decoded token after verify()
    console.log("user token's id")
    console.log(req.user.id);

    // enrolled courses of the user from the request body
    console.log(req.body.enrolledCourses);

    if(req.user.isAdmin){
        return res.status(403).send({message: "Admin is forbidden"});
    }

    let newEnrollment = new Enrollment({
        userId: req.user.id,
        enrolledCourses: req.body.enrolledCourses,
        totalPrice: req.body.totalPrice
    });


    return newEnrollment.save().then(enrolled =>{
        return res.status(201).send({
            success: "True",
            message: "Enrolled Successfully"
        });
    })
    .catch(error => errorHandler(error, req, res));

}

//[SECTION] Activity: Get enrollments
/*
    Steps:  
    1. Use the mongoose method "find" to retrieve all enrollments for the logged in user
    2. If no enrollments are found, return a 404 error. Else return a 200 status and the enrollment record
*/
module.exports.getEnrollments = (req, res) => {
    return Enrollment.find({userId : req.user.id})
        .then(enrollments => {
            if (enrollments.length > 0) {
                return res.status(200).send(enrollments);
            }
            return res.status(404).send({message: "No enrolled courses"});
        })
        .catch(error => errorHandler(error, req, res));
};

//member 5 end (s48)