const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tickets = new Schema({
  movieName: String,
  description: String,
  price: String
})

module.exports = { Tickets }