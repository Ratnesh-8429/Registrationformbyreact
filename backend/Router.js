const express = require("express");

const Router = express.Router();
const sqlDbconnect = require("./dbconnect"); 
 Router.get("/",(req,res)=>{
    const userData = [{ name:"Shakti", email:"shakti23k@gmail.com", age:23},
                      {name:"Ratnesh",email:"ratnesh34k@123", age:24}];
                      res.send(userData);
 }); 
Router.get("/api/user",(req,res)=>{
    sqlDbconnect.query("Select * from  user_form" ,(err, rows)=>{
      if(!err){
         res.send(rows);
      }else{
         console.log(err);
      }
    });
});
Router.get("/api/country",(req,res)=>{
   sqlDbconnect.query("Select * from countries", (err,rows)=>{
      if(!err){
         res.send(rows);
      }else{
         console.log(err);
      }
   });
});
Router.get("/api/state/:id",(req,res)=>{
   sqlDbconnect.query("Select * from cities where countryid= '"+req.params.id+"'", (err,rows)=>{
      if(!err){
         res.send(rows);
      }else{
         console.log(err);
      }
   });
});


 module.exports = Router;