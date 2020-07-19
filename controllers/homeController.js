
// requring taskList from models
const task=require("../models/taskList")




// home controler function 
let homeController=function(req,res){
  // as we find the task we render home.ejs
    task.find({},function(err,object){
      if(err){
        console.log("error")
      }
         else{
          //  setting title and tasks in res.locals
            res.render("home",{
                title:"Todo App", 
                tasks:object
            });
         }
    })
   
}


module.exports=homeController;