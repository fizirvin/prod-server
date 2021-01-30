const { toDate } = require('date-fns-tz')

module.exports = function zoneDate(date) {
  return toDate(date, { timeZone: 'America/Mexico_City' })
}
