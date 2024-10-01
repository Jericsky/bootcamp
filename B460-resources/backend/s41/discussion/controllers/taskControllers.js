const Task = require("../models/Task");

module.exports.getAllTasks = () => {
	return Task.find({}).then(result => {
		return result;
	})
}

module.exports.createTask = (reqBody) => {
	let newTask = new Task({
		name: reqBody.name
	})

	return newTask.save().then((task, error) => {
		if (error){
			console.log(error);
			return false;
		} else {
			return task;
		}
	})
}

module.exports.deleteTask = (taskId) => {
	return Task.findByIdAndDelete(taskId)
	.then((removedTask) => removedTask)
	.catch(err => false)
}