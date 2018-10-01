const express = require('express')
const app = express()
app.get('/', (req, res) => { res.send('Hola Gente. Esto es una prueba de servidor') })
app.listen(3000)
