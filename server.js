const express = require('express')
const path = require('path')
const app = express()

/*
const middleware = require('./middleware')
const consoleLogMiddleware = middleware.consoleLogMiddleware
const fileLogMiddleware = middleware.fileLogMiddleware
*/
// las tres líneas anteriores se reducen en una línea de la siguiente forma
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

// configuro el hbs
const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
app.set('view engine', 'hbs')

// indico la ruta donde tengo mi documento html
const staticRoute = path.join(__dirname, 'public')
app.use(express.static(staticRoute))

// creamos un middleware que guarde traza de las fechas de accesos
app.use(consoleLogMiddleware)

// creo middleware que guarde los cambios en el fichero server.log
app.use(fileLogMiddleware)

app.get('/', (req, res) => { res.send('Hola Gente') })

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

app.get('/contacto', (req, res) => {
  // res.send('Página de contacto')
  // renderizo el html de contacto
  res.render('contactar', {
    pageTitle: 'Página de contacto'
})

app.get('/noticias', (req, res) => {
  res.render('noticias', {
    pageTitle: 'Página de noticias'
  })
})

app.get('/contactar', (req, res) => {
  res.send({ Nombre: 'Pepe', Correo: 'pepito@pepe.com' }) // guardo los datos de contacto
})
