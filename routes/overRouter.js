const express =require('express')
const overModel=require("../models/over")
const over =require('../controllers/over')
const bowler =require('../controllers/bowler')
const overRouter= express.Router()
const test =require('../controllers/test')

overRouter.get("/over/viewall",bowler.bowlerData)

overRouter.get("/test",test.test)
overRouter.get("/bowler/economy",bowler.bowlerEconomy)
overRouter.post("/over/update",over.update)

overRouter.post("/over/add",over.add)

module.exports=overRouter