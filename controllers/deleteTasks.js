const task=require("../models/taskList")




let deleteTasks=function(req,res){
if(req.body.check)   {

 task.findByIdAndDelete({_id:req.body.check},function(err,object){
      
    
 })
    
    for(let i=0;i<req.body.check.length;i++){
    task.findByIdAndDelete({_id:req.body.check[i]},function(err,object){
      
    })}}
    res.redirect("/");
   //  console.log(req.body);

 }

module.exports=deleteTasks; 