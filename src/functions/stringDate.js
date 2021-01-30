const { utcToZonedTime, format } = require('date-fns-tz')

module.exports = function stringDate(date) {
  const mexDate = utcToZonedTime(date, 'America/Mexico_City')
  return format(mexDate, 'yyyy-MM-dd', {
    timeZone: 'America/Mexico_City'
  })
}
