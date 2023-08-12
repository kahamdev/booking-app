const express=require('express')
const app=express()

const url = require('./routes/routes')
const cors = require('cors')

const cookieparser=require('cookie-parser')

const dotenv= require('dotenv')
dotenv.config()

const PORT=process.env.PORT || 5000

const mongoose = require('mongoose')
mongoose.connect(
    process.env.DATABASE_ACCESS,
    {useNewUrlParser:true,useUnifiedTopology:true},
    () => console.log("database connected successful")
    )
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

// app.use(cors({credentials:true,orign:"http://localhost:3000"}))
app.use(cookieparser())
app.use('/api',url)


app.listen(PORT,()=>console.log("server now is running at http://localhost:5000"))