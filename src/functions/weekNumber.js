const { utcToZonedTime, format } = require('date-fns-tz')

module.exports = function weekNumber(date) {
  const today = new Date(date)
  const mexDate = utcToZonedTime(today, 'America/Mexico_City')
  return format(mexDate, 'ww', { timeZone: 'America/Mexico_City' })
}
