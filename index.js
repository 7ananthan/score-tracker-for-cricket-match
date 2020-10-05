var express = require("express")
var parser = require("body-parser")
var mongoose =require('mongoose')
var morgan =require('morgan')
const bodyParser = require("body-parser")
const overRouter =require("./routes/overRouter")

const app=express()

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/cavalry')
mongoose.connection.once('open',()=>{
    console.log("DB Connection Established!!!")
})
app.listen(5000,()=>{
    console.log("Server Started on PORT 5000")
})

app.use("/api/v1",overRouter)