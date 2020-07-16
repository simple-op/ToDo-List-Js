const mongoose=require('mongoose');

const schema=new mongoose.Schema({
     task:{
         type:String,
         required:true
     },
     date:{
         type:Date,
         required:true
     },
     category:{
        type:String,
        required:true

     },
     completed:{

        type:Boolean,
        required:true
     }


})

let task=mongoose.model('TaskList',schema);
module.exports=task;