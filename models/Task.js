const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true,maxlength:[20,'name cannot be more than 20 characters']},
    completed:{type:Boolean,default:false}})

module.exports = mongoose.model('Task',TaskSchema)  
//.model('Task',TaskSchema) - this will create a collection called tasks in the database  

//only the mnention one will be exported to document in the schemac we can mention the type of the data and the default value of the data

// we can also mention the validation for the data in the schema itself like maxlength and minlength and required and trim and so on 



//put vs patch - put is used to update the entire object and patch is used to update a part of the object 
