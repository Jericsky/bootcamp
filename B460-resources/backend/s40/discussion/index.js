//Dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:admin1234@gamatdb.aobzzsj.mongodb.net/b460-to-do?retryWrites=true&w=majority");

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



//Creating a Task

app.post("/tasks", (req, res) => {
    //find a duplicate incase before heading to adding task
    Task.findOne({name : req.body.name}).then((result, err) => {

        if(result != null && result.name == req.body.name){
            return res.send("Duplicate task found");
        } else {
            let newTask = new Task({
                name: req.body.name
            });

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    return console.error(saveErr);
                } else {
                    return res.send("New task created!");
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














if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = {app, mongoose};