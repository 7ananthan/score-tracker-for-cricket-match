const overModel =require('../models/over')


module.exports.test = async(req,res)=>{

    let over =await overModel.find(
         {
             "bowler.name":req.body.bowler
                },
     )
     var wicket =0
     for (var index = 0; index < over.length; index++) {        
         for (var ballIndex = 0; ballIndex < over[index].ballDescription.length; ballIndex++) {
             if (over[index].ballDescription[ballIndex].wicket==true) {
                 wicket++
             }
         }    
     
     }
   
     res.json(wicket)  
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