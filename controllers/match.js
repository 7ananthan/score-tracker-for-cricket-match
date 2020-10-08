const overModel =require('../models/over')


module.exports.totalruns =async (req,res)=>{

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
