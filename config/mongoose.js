// requiring mongoose after npm install mongooose
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://ramesh:ptwmjg.ad@cluster0.mijqg.gcp.mongodb.net/<codeial?retryWrites=true&w=majority");
// acquiring connection to check for errors
const dbConnection=mongoose.connection;
dbConnection.on("error",function(){
    console.error("problem in connecting db");
})
// once connected successfully show meassge on console
dbConnection.once("open",function(){
   console.log("db connected successfully");
})