const express =require('express')
const overModel=require("../models/over")

const overRouter= express.Router()

overRouter.post("/over/add",async (req,res)=>{
    
    let _over =new overModel({
        "overNo" : req.body.name,
        "run":req.body.run,
        "bowler": req.body.bowler,
        "batTeam":req.body.batTeam,
        "ballDescription":req.body.ballDescription,
            })
            let data =await _over.save()
            res.send(data)
})

module.exports=overRouter