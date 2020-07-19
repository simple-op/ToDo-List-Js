const express=require('express');
const router=express.Router();

// middle  ware in between 
router.use('/',require('./homeRoute'));





module.exports=router;