const overModel= require('../models/over')

module.exports.bowlerEconomy = async(req,res)=>{

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
               
   
}
module.exports.bowlerWicket= async(req,res)=>{

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
    }

module.exports.bowlerData = async(req,res)=>{
    try {
        var result = await overModel.find({"bowler.name": req.body.name});
        res.send(result);        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

