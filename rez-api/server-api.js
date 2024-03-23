require('dotenv').config()
const express = require('express')
const server = express()

// Using CORS middleware
const cors = require('cors'); 
//const multer = require('multer')

server.use(cors());

const connectDB = require('./connect-db.js')
const oldRouter = require('./routes/oldRoutes.js')
//const userRouter = require('./routes/user.js')


server.use( express.json() )
server.use('/old', oldRouter)
//server.use('/user', userRouter)

;(async ()=>{
    await connectDB()
    server.listen(process.env.PORT || 3000, ()=>{
        console.log('server-api in effect')

})

})()
