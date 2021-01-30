const { utcToZonedTime, format } = require('date-fns-tz')

module.exports = function shortDate(date) {
  const mexDate = utcToZonedTime(date, 'America/Mexico_City')
  return format(mexDate, 'yyyy-MMM-dd', { timeZone: 'America/Mexico_City' })
}
