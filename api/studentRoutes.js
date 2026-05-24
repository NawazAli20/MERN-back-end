import express from 'express'; 
import Student from '../models/student.js';

const router = express.Router(); 

router.get("/",async (req,res)=>{
    try{
    const response = await Student.find({});
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

router.get("/insert", async (req,res)=>{
    try{
    const newStudent = {name:"Matt", gpa:3.90};
    const response = await Student.insertOne(newStudent);
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

router.get("/delete", async (req,res)=>{
    try{
    const response = await Student.deleteOne({name:"NoName"});
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

router.get("/update/:gpa", async (req,res)=>{
    try{
    const gpa = req.params.gpa;
    const response = await Student.updateOne({name:"Matt"},{$set:{gpa:gpa}});
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

export default router; 