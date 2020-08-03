// require  the express framework
const express=require("express");
// require the mongoose for mongo db
const db=require("./config/mongoose");




//setting up the port at which server will be running
const port=process.env.PORT||9000;
// calling the express function
const app=express();
// using middleware to oarse the url sent through the form
app.use(express.urlencoded());

// require the view engine in our case its ejs
const ejs=require('ejs');
const { static } = require("express");
// setting up the view engine
app.set('view engine','ejs');
app.set('views','./views')

// setting up the routes
app.use('/',require("./routes"));


app.use(express.static('assets'))


// firing up the express server
app.listen(port,function(err){
      if(err){
          console.log(err);
          return;
      }
       
      console.log(`server running on ${port}`)

})



