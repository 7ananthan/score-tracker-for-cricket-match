const express =require('express')
const overModel=require("../models/over")
const over =require('../controllers/over')
const bowler =require('../controllers/bowler')
const overRouter= express.Router()
const test =require('../controllers/test')
const match =require('../controllers/match')

//Returns all data related to a bowler [input :name]
overRouter.get("/bowler/data",bowler.bowlerData)

//Returns team score and runrate [input :teamName]
overRouter.get("/team/run",match.totalruns)

//for fun
overRouter.get("/test",test.test)

//Returns bowler Economy [input :bowler]
overRouter.get("/bowler/economy",bowler.bowlerEconomy)

//Returns bowler Economy [input :bowler]
overRouter.get("/bowler/wicket",bowler.bowlerWicket)

//api to input ball description [input :overNo ,ballDescription {}]
overRouter.post("/over/update",over.update)

//api to initialize an over [input :over details]
overRouter.post("/over/add",over.add)

module.exports=overRouter