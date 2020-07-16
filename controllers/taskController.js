// const expres=require('express');
// const mongoose=require('mongoose');
// const ejs=require('ejs');
// const app=expres();

const task=require("../models/taskList");
const router = require("../routes/homeRoute");
// const { urlencoded } = require('express');



let taskController=function(req,res){
   console.log(req);

   task.create({
       task:req.body.task,
       date:req.body.date,
       category:req.body.category,
       completed:false
   });
   res.redirect("/")
}




module.exports=taskController;