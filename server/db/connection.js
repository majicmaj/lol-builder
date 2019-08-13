const mongoose = require('mongoose')

let mongoURI = 'mongodb://localhost/lol-builder'
if (process.env.NODE_ENV === 'production') mongoURI = process.env.DB_URL

mongoose.connect(mongoURI, { useNewUrlParser: true })
module.exports = mongoose