const express =require('express')
const over = require('../models/over')
const overModel=require("../models/over")

const overRouter= express.Router()

overRouter.get("/over/viewall",async(req,res)=>{
    try {
        var result = await overModel.find();
        res.send(result);        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

overRouter.post("/over/update",async(req,res)=>{

   let result = await overModel.updateOne(
        { "overNo":req.body.overNo},
        {$push:
            {"ballNo":req.body.ballNo,"ballDescription":req.body.ballDescription},}    
    ); 
    res.send(result)
    
})

overRouter.post("/over/add",async (req,res)=>{
    
    let _over =new overModel({
    
        "overNo" : req.body.overNo,
        "run":req.body.run,
        "bowler": req.body.bowler,
        "batTeam":req.body.batTeam,
       
            })
            let data =await _over.save()
            res.send(data)
})

module.exports=overRouter