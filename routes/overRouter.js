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
overRouter.get("/bowler/economy",async(req,res)=>{

    // let incompleteOver=  await overModel.find(
    //     {
    //         "bowler.name":req.body.bowler,
    //         "ballDescription.5":{"$exists":false}
    //     }
       
    // )
    // res.json(incompleteOver)


        let ballCount=  await overModel.aggregate(
            [
                {
                    $match : { "bowler.name": req.body.bowler },
                },
                {
                    $count:"overs"
                }
            ]
        )
        ballCount = ballCount[0].overs

   
    
        let runsConcieved=await overModel.aggregate(
        [{
            $match : { "bowler.name": req.body.bowler },
        },
        
        {
            $group : {
                _id : null,
                   total : {
                    $sum : "$overRun"
                    
                }
            }
        }]            
        );
        runsConcieved= runsConcieved[0].total

             let  result= (runsConcieved)/(ballCount)
                res.json(result)
               
   
})
overRouter.post("/over/update",async(req,res)=>{

   let result = await overModel.updateOne(
        { "overNo":req.body.overNo},
      
        {$push:
            {"ballNo":req.body.ballNo,"ballDescription":req.body.ballDescription},
            $inc: { "overRun": req.body.ballDescription.run} }    
    ); 
    res.send(result)
    
})

overRouter.post("/over/add",async (req,res)=>{
    
    let _over =new overModel({
    
        "overNo" : req.body.overNo,
        "bowler": req.body.bowler,
        "batTeam":req.body.batTeam,
       
            })
            let data =await _over.save()
            res.send(data)
})

module.exports=overRouter