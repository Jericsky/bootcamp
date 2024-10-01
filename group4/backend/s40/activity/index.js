//Dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.oqytc.mongodb.net/b460-to-do?retryWrites=true&w=majority");

let db = mongoose.connection;

//database handlers
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to the cloud database"));

//Mongoose Schema
//Use the Schema() constructor
//new

const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        //predefined values
        default: "pending"
    }
})

const Task = mongoose.model("Task", taskSchema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Creating a task

app.post("/tasks", (req, res) => {

    Task.findOne({name : req.body.name}).then((result,err) =>{

    	if(result != null && result.name == req.body.name){
    		return res.send("Duplicate task found");
    	} else {
    		let newTask = new Task({
    			name:req.body.name
    		});

    		newTask.save().then((savedTask,saveErr) => {
    			if(saveErr){
    				return console.error(saveErr);
    			} else {
    				return res.send("New task created");
    			}
    		})
    	}
    })
})



app.get("/tasks", (req, res) => {

    Task.find({}).then((result, err) => {
        if (err){
            return console.log(err);
        } else {
            return res.send(result)
        }
    })
});


// 1
app.get("/tasks", (req, res) => {
    Task.find({})
        .then((tasks) => {
            res.status(200).json(tasks);
        })
        .catch((err) => {
            console.error("Error retrieving tasks:", err);
            res.status(500).send("Error retrieving tasks");
        });
});


// 2.
app.post("/search-task", (req, res) => {
    const taskName = req.body.name;
    Task.findOne({ name: taskName })
        .then((task) => {
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).send("Task not found");
            }
        })
        .catch((err) => {
            console.error("Error searching for task:", err);
            res.status(500).send("Error searching for task");
        });
});

// 3.
// Mongoose Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register route to create a new user
// This route handles user registration by checking for duplicates,
// validating the request body, and saving the new user to the database
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password) {
    return res.status(400).send("All fields must be provided");
  }

  // for checking if username already exists
  User.findOne({ username: username }).then((existingUser) => {
    if (existingUser) {
      return res.status(400).send("Duplicate username found");
    } else {
      // to create  a new user
      let newUser = new User({
        username,
        email,
        password,
      });

      newUser.save().then((savedUser, saveErr) => {
        if (saveErr) {
          return res.status(500).send("Error saving user: " + saveErr.message);
        } else {
          return res.status(201).send("New user registered");
        }
      });
    }
  });
});

// 4
let users = [];
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    let user = users.find(user => user.email === email);

    if (!user) {
        return res.status(401).send("email does not exist");
    }
    if (user.password !== password) {
        return res.status(401).send("Wrong Password");
    }

    res.send("Thank you for logging in ");
});
// 5


if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = {app, mongoose};