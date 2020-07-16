const express=require('express');
const router=express.Router();


router.use('/',require('./homeRoute'));





module.exports=router;