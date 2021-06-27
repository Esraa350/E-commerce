const express=require('express');
require('dotenv').config();
const mongoose=require('mongoose');
const logger=require("morgan");
const bodyParser=require('body-parser');
const cors=require('cors');
const userRoute=require('./Routes/user');
const categoryRoutes = require("./Routes/category");
const productRouters=require("./Routes/Product");
const path=require('path')
const app=express();


//---------- DB Config ----------//
require("./boot/DBConnection");
// //---------- Middlewares ----------//
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//---------- Routes ----------//
app.use("/user",userRoute);
app.use("/category",categoryRoutes);
app.use("/product",productRouters);
// ----------- Static Files -----------//
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../../client/build')));
   app.get('*', (req, res) => {
     res.sendFile(
       path.resolve(__dirname, '../../client', 'build', 'index.html')
     );
   });
 }

//---------- Errors ----------//
app.use((req,res,next)=>{
   res.status(404).send({
      message:'not found'
   })
})

module.exports=app;