const { utcToZonedTime, format } = require('date-fns-tz')

module.exports = function fullDate(date) {
  if (!date) {
    return null
  }
  const mexDate = utcToZonedTime(date, 'America/Mexico_City')
  const output = format(mexDate, 'iii PPp zzz', {
    timeZone: 'America/Mexico_City'
  })
  return output
}
