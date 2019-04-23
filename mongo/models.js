const mongoose = require('mongoose')
const { Tickets } = require('./schemas')

const TicketsModel = mongoose.model('Ticket', Tickets)

module.exports = {
  TicketsModel
}