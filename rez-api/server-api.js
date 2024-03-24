require('dotenv').config()
const express = require('express')
const server = express()

// Using CORS middleware
const cors = require('cors'); 
//const multer = require('multer')

server.use(cors( ));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});



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
