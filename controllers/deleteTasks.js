// requring the mongo model taskList from models
const task=require("../models/taskList")



// delete tasks controlller function
let deleteTasks=function(req,res){
if(req.body.check)   {

 task.findByIdAndDelete({_id:req.body.check},function(err,object){
      
    
 })
    // deleting every task that is seleted through check box
    for(let i=0;i<req.body.check.length;i++){
    task.findByIdAndDelete({_id:req.body.check[i]},function(err,object){
      
    })}}
    // once deleting done redirect to homepage
    res.redirect("/");
   //  console.log(req.body);

 }
// exports deletetasks for use in routes 
module.exports=deleteTasks;  