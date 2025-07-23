const express = require('express')
const colors = require('colors')
const errorHandler = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor Iniciado en el puerto ${port}`))
