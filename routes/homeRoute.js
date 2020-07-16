const express=require('express');
const router=express.Router();


router.get('/',require('../controllers/homeController'));

router.post('/create',require('../controllers/taskController'));


module.exports=router;