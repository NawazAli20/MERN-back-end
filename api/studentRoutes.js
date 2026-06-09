import express from 'express'; 
import Student from '../models/student.js';

const router = express.Router(); 

router.get("/",async (req,res)=>{
    try{
    const response = await Student.find({});
    if(!response){
        res.status(404).json({msg:"Student is not found"});
    }
    res.status(200).json(response);
    }catch(err){
        res.status(500).json({msg:"Error in fetching students:"});
    }
});

//get a student by id
router.get("/:id",async (req,res)=>{
    try{
     const id = req.params.id;    
    const response = await Student.findById(id);
    if(!response){
        res.status(404).json({msg:"Student is not found"});
    }
    res.status(200).json(response);
    }catch(err){
        res.status(500).json({msg:"Error in fetching students:"});
    }
});

//add a new student
router.post("/add", async (req,res)=>{
    try{
    const newStudent = req.body;
    const response = await Student.insertOne(newStudent);
    res.status(201).json(response);
    }catch(err){
        res.status(500).json({error:"Error in fetching students:"});
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

//update a student by id
router.put("/update/:id", async (req,res)=>{
    try{
    const id = req.params.id;
    const student = req.body;
    const response = await Student.updateOne({_id:id},student);
    if(response.matchedCount>0){
        res.status(200).json(response);
    }else{
        res.status(404).json({err:"Student is not found with the given id"})
    }
    
    }catch(err){
        res.status(500).json({err:"Error in fetching students"});
    }
});

export default router; 