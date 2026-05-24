import express from 'express'; 
import _ from 'underscore';
import morgan from 'morgan';  
import Connection from './connection.js';
import cors from 'cors';


import studentRoutes from './api/studentRoutes.js'; 

Connection(); //call the Connection function

const app = express(); 
const port = 3000;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(cors()); //accept request(s) from cross domains
app.use(express.json());

//link studentRoutes to server
app.use("/api/students",studentRoutes);

//Now API endpoint will be localhost:3000/api/students/

app.get("/",(req,res)=>{
    res.send("Welcome to RESTful API");
}); 


app.listen(port,()=>{
    console.log("Express is running at port: "+port);
});


