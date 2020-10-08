const overModel =require('../models/over')


module.exports.test = async(req,res)=>{

    let wicketCount =await overModel.find(
         {
             "bowler.name":req.body.bowler
                },{
                    ballDescription  :
                    {$elemMatch:
                        {
                            wicket:true
                        }}
                }
     )
     {

    }
    res.json(wicketCount)
//     let wicketCount=  await overModel.aggregate(
//     [
//         {
//             $match : { "bowler.name": req.body.bowler  },
//         },
//         {
//             elemMatch :{"ballDescription":{$elemMatch:
//                 {
//                     wicket:true
//                 }
//             }
//         }
//         },
//         {
//             $count:"wickets"
//         }
//     ]
// )
// res.json(wicketCount)

}