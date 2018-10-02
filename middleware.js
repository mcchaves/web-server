// un middleware recibe tres parametros
const fs = require('fs')

const consoleLogMiddleware = (req, res, next) => {
  var now = new Date().toString()
  console.log(`Time: ${now} ${req.method} ${req.url}`)
  next()
}
const fileLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  const message = console.log(`Time: ${now} ${req.method} ${req.url}`)
  fs.appendFile('server.log', message, (err, data) => {
    if (err) console.log(err)
  })
  next()
}

module.exports = {
  consoleLogMiddleware,
  fileLogMiddleware
}
