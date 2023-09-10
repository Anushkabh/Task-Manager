const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
        //res.status(200).json({tasks,amount:tasks.length})
         
    } catch (error) {
        res.status(500).json({ msg: error })
    }


}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
//we created a task and we are sending it back to the client as a response

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params // this is called object destructuring id is the key and taskID is the value
        const task = await Task.findOne({ _id: taskID }) // we are using findOne because we are searching for a single task _id is the key and taskID is the value 
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${taskID}` })
        }
        res.status(200).json({ task })


    } catch (error) {
        res.status(500).json({ msg: error })

    }
}


const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task =await Task.findByIdAndUpdate({_id:taskID},req.body,{new:true,runValidators:true}) // we are using findOne because we are searching for a single task _id is the key and taskID is the value here req.body is the data that we want to update and new:true is to return the updated data and runValidators:true is to run the validators that we have in the schema
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${taskID}` })}
        res.status(200).json({ task })
        } catch (error) {
        res.status(500).json({ msg: error })
        }            

    }

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${taskID}` })
        }
        res.status(200).json({ task })
        //res.status(200).send()
        //res.status(200).json({task:null,msg:`task with id ${taskID} deleted`})
    } catch (error) {
        res.status(500).json({ msg: error })

    }






}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}