const keyValueNgModelSub = require('./keyValueNgModelSub')

module.exports = function filterNgsModelsSub(models, fields, ngs, defect) {
  const data = models.map((model) => {
    const sub = fields.map((item) => {
      return {
        date: item.value,
        field: item.field,
        value: keyValueNgModelSub(ngs, defect, item.min, item.max, model._id)
      }
    })
    const subtotal = {
      field: 'total',
      value:
        sub.reduce((a, b) => {
          return +(a + +b.value).toFixed(2)
        }, 0) || 0
    }
    return { row: model.name, data: [...sub, subtotal] }
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
