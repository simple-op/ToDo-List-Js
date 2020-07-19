const express=require('express');
const router=express.Router();

// on get request it will call homeController 
router.get('/',require('../controllers/homeController'));
// on post request it calls  task Controller 
router.post('/create',require('../controllers/taskController'));
// on delete post request it calls deleteTasks 
// 
router.post('/delete',require('../controllers/deleteTasks'));


// it exports router
module.exports=router;