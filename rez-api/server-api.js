require('dotenv').config()
const express = require('express')
const server = express()

// Using CORS middleware
const cors = require('cors'); 
//const multer = require('multer')

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:8080', // Replace with the origin you want to allow
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}


server.use(cors( corsOptions ));

const connectDB = require('./connect-db.js')
const oldRouter = require('./routes/oldRoutes.js')
//const userRouter = require('./routes/user.js')


server.use( express.json() )
server.use('/old', oldRouter)
//server.use('/user', userRouter)

;(async ()=>{
    await connectDB()
    server.listen(3000, ()=>{
        console.log('server-api in effect')

})

})()
