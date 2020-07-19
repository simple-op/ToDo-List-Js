// const expres=require('express');
// const mongoose=require('mongoose');
// const ejs=require('ejs');
// const app=expres();

const task=require("../models/taskList");
const router = require("../routes/homeRoute");
// const { urlencoded } = require('express');


// taskcontroller function 
let taskController=function(req,res){
//    console.log(req);
// creating task with the following values 
   task.create({
       task:req.body.task,
       date:req.body.date,
       category:req.body.category,
       completed:false
   });
   res.redirect("/")
}



// expoprting taskController
module.exports=taskController;