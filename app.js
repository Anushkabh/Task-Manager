
console.log('Task Manager App')
// first we need to decide the routes that we will have in our application 
// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update a single task
// app.delete('/api/v1/tasks/:id') - delete a single task

// why we need to have a version in our api convention is to make sure that we can update our api without breaking the existing api we have version in our api because we want to make sure that we can update our api without breaking the existing api

// we will setup the api

const express =require('express');
const app = express();
const tasks=require('./routes/task.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/not-found.js')
// middleware
app.use(express.static('./public')) // this will serve the static files in the public folder
app.use(express.json()) // this will parse the json data and add it to the body of the request object

//routes
//app.get('/hello',(req,re)=>{
    //res.send('task manager')
//}//)
app.use('/api/v1/tasks',tasks)
app.use(notFound)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,console.log('server is listening on port 3000'))
    }
    catch(error){
        console.log(error)
    }
}

start()


