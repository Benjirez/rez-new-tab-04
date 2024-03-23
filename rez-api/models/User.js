const mongoose = require('mongoose')
const User = new mongoose.model('User', mongoose.Schema({ a: String, b: String, c: String, d: [] }) )

module.exports = User