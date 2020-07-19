const mongoose=require('mongoose');
// setting mongoose schema
const schema=new mongoose.Schema({
     task:{
         type:String,
         required:true
     },
     date:{
         type:String,
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
// craeting table/model  in mongoose
let task=mongoose.model('TaskList',schema);
module.exports=task;