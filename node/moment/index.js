const moment = require('moment')

const a = moment().day(-6).format()
const b = moment().day(0).format()
const c = moment().clone().endOf('month').day(0).hour(23).minute(59).second(59).format()


console.log(a)
console.log(b)
console.log(c)