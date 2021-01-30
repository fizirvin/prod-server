const keyValueDowntimeSub = require('./keyValueDowntimeSub')

module.exports = function filterDowntimesSub(
  machines,
  fields,
  downtimes,
  issue
) {
  const data = machines.map((machine) => {
    const sub = fields.map((item) => {
      return {
        date: item.value,
        field: item.field,
        value: keyValueDowntimeSub(
          downtimes,
          issue,
          item.min,
          item.max,
          machine._id
        )
      }
    })
    const subtotal = {
      field: 'total',
      value:
        sub.reduce((a, b) => {
          return +(a + +b.value).toFixed(2)
        }, 0) || 0
    }
    return { row: machine.number, data: [...sub, subtotal] }
  })
  return data
    .filter(
      (item) =>
        item.data.reduce((a, b) => {
          return +(a + +b.value).toFixed(2)
        }, 0) !== 0
    )
    .sort((x, y) => {
      const valueA = y.data.find((d) => d.field === 'total').value
      const valueB = x.data.find((d) => d.field === 'total').value
      return valueA - valueB
    })
}
