const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/todo");

const dbConnection=mongoose.connection;
dbConnection.on("error",function(){
    console.error("problem in connecting db");
})

dbConnection.once("open",function(){
   console.log("db connected successfully");
})