const mongoose = require('mongoose')


const connectDB = async ()=>{
    try {
        await mongoose.connect( process.env.DB_URI )
        console.log('MC on the DB')
    } catch (err) {
        (err)=>{ console.log(err) }
    }
}

module.exports = connectDB
