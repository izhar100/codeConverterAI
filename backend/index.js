const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser = require('body-parser');
const { convertRouter } = require("./route/convert.route");
const { debugRouter } = require("./route/debug.route");
const { qualityRouter } = require("./route/quality.route");
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
require("dotenv").config()
app.use("/convert",convertRouter)
app.use("/debug",debugRouter)
app.use("/quality",qualityRouter)
const port=process.env.port||8080
app.listen(port,()=>{
    console.log(`Server is running at port:${port}`)
})