const express = require('express')
const router = express.Router()
const { crearUser, loginUser, datosUser } = require('../controllers/usersControllers')
const protect = require('../middleware/authMiddleware')

//Endpoint privado
router.get('/datos', protect, datosUser)

//Endpoint Publicos
router.post('/login', loginUser)
router.post('/', crearUser)

module.exports = router