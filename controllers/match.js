const overModel =require('../models/over')


module.exports.totalRuns =async (req,res)=>{

    let runsScored=await overModel.aggregate(
        [{
            $match : { "batTeam": req.body.teamName },
        },
        
        {
            $group : {
                _id : null,
                   total : {
                    $sum : "$overRun"
                                      
                },runRate:{
                    $avg: "$overRun"
                }
            }
        }]            
        );
        runsScored= runsScored[0]
        res.json(runsScored)

}

module.exports.extraRuns= async(req,res)=>{

    let over =await overModel.find(
         {
             "batTeam":req.body.teamName
                },
     )
     var runs =0
     for (var index = 0; index < over.length; index++) {        
         for (var ballIndex = 0; ballIndex < over[index].ballDescription.length; ballIndex++) {
             if (over[index].ballDescription[ballIndex].wide==true || 
                over[index].ballDescription[ballIndex].noBall==true ) {
                 runs++
             }
         }    
     
     }
   
     res.json(runs)  
    }
