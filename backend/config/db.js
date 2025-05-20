const mongoose = require('mongoose');
   require('dotenv').config();// local server
 
// const MONGO_URI= '' // online atlas database                   

mongoose.connect(process.env.MONGO_URI, {
 
  ssl: true,
  tlsAllowInvalidCertificates: false,
}); // connect krne ke liye

const Db=mongoose.connection; // ye ek connection object banta hai
Db.on('connected',()=>{
    console.log("connected to mongodb");
})

Db.on('error',(err)=>{
    console.log("error in find: ",err); // connected error or disconnected eventlistner jo already define hai
   } )

Db.on('disconnected',()=>{
    console.log(" mongodb is disconnected");
})
 module.exports=Db;
// isme mmongo db se connection banayenge 