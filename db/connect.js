const mongoose = require('mongoose');


const connectDB = (url) => {
    return mongoose.connect('mongodb+srv://anushkabh6:ANUro123@cluster0.wf3jrkh.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true,  useCreateIndex:true, useFindAndModify: false,useUnifiedTopology: true})
}

//mongoose.connect(connectionstring,{useNewUrlParser:true,useUnifiedTopology:true}, { useFindAndModify: false ,useCreateIndex:true})
//.then(()=>console.log('connected to db'))
//.catch((err)=>console.log(err))

//the problem here is server is loaded first and then the db is connected so we need to make sure that the db is connected first and then the server is loaded
// so we need to make sure that the server is loaded only after the db is connected

module.exports = connectDB;
