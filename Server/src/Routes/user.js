const express=require('express');
const router=express.Router();
const passport=require('passport');
const UserController=require('../Controllers/UserContoller');
const userAuth = require("../MiddleWares/Auth");
// const BookController=require('../Controllers/books.controllers');


//Auth sign Up
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get("/logged", userAuth.auth, UserController.getUser);
///customize and protect the routes

router.all('*',(req,res,next)=>{
    passport.authenticate('jwt',{session:false},(err,user)=>{
        if(err || !user){
            return res.status(401).send({ error: "Unauthorized action" });
        }
        req.user=user;
        return next();
    })(req,res,next);
})
module.exports=router;