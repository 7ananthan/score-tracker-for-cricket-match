const overModel =require('../models/over')

module.exports.add =async (req,res)=>{ 
    
    
//     let _over = await overModel.update({
           
//     "overNo" : req.body.overNo
        
// },{
// $set :{
//     "bowler": req.body.bowler,
//     "batTeam":req.body.batTeam}  ,
    
//         $push:
//             {"ballDescription":req.body.ballDescription},
//             // $inc: { "overRun": req.body.ballDescription.run}   
   
// },{upsert:true} 

// )
// res.send(_over)

let _over =new overModel({
    
    "overNo" : req.body.overNo,
    "bowler": req.body.bowler,
    "batTeam":req.body.batTeam,
   
        })
        let data =await _over.save()
        res.send(data)
}


module.exports.update = async(req,res)=>{

    let result = await overModel.updateOne(
         { "overNo":req.body.overNo},
       
         {$push:
             {"ballDescription":req.body.ballDescription},
             $inc: { "overRun": req.body.ballDescription.run} }    
     ); 
     res.send(result)
     
 }