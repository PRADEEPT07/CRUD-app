const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{ useNewUrlParser : true},(err)=>{
    if(!err) {
        console.log('MongoDB connection Succeeded')
    }
    else {
        console.log('Erroe in DB connection :' + err)
    }  
})

require('./employee.model')