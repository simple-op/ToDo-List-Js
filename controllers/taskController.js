const expres=require('express');
const mongoose=require('mongoose');
// const ejs=require('ejs');
const app=expres();



let taskController=function(req,res){
    res.render("home",{
        title:"Todo List"
    });
}


module.exports=taskController;