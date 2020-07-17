// const expres=require('express');
// const mongoose=require('mongoose');
// const ejs=require('ejs');
// const app=expres();
const task=require("../models/taskList")





let homeController=function(req,res){

    task.find({completed:false},function(err,object){
      if(err){
        console.log("error")
      }
         else{
            res.render("home",{
                title:"Todo App", 
                tasks:object
            });
         }
    })
   
}


module.exports=homeController;