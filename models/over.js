var mongoose =require('mongoose')

const {Schema}=mongoose
const overSchema= new Schema({
    overNo : {type:Number, min: 0, max: 20 },
    overRun :{type:Number,default:0},
        bowler:{
        name:String,
        team:String
    },
    batTeam:String,
    ballDescription:[{
     ballNo:Number,
     run:Number,
     wide:Boolean,
     noBall:Boolean,
     wicket:Boolean
       
   }]
})
module.exports=mongoose.model("over",overSchema)