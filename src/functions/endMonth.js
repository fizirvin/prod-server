const { endOfMonth } = require('date-fns')
const stringDate = require('./stringDate')

module.exports = function endMonth(date) {
  const end = endOfMonth(date)
  return stringDate(end)
}
