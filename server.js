const express = require('express')
const app = express()

/*
const middleware = require('./middleware')
const consoleLogMiddleware = middleware.consoleLogMiddleware
const fileLogMiddleware = middleware.fileLogMiddleware
*/
// las tres líneas anteriores se reducen en una línea de la siguiente forma
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

app.get('/', (req, res) => { res.send('Hola Gente') })

// creamos un middleware que guarde traza de las fechas de accesos
app.use(consoleLogMiddleware)

// creo middleware que guarde los cambios en el fichero server.log
app.use(fileLogMiddleware)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

app.get('/contacto', (req, res) => {
  res.send('Página de contacto')
})
app.get('/contactar', (req, res) => {
  res.send({ Nombre: 'Pepe', Correo: 'pepito@pepe.com' }) // guardo los datos de contacto
})

app.get('/noticias', (req, res) => {
  res.send('Página de noticias')
})
