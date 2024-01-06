const { Router } = require('express')
const routes = Router()

const AuthRoutes = require('./routers/authRoutes')
const UserRoutes = require('./routers/userRoutes')
const pokemonRoutes = require('./routers/pokemonRoutes')

routes.use('/auth', AuthRoutes)
routes.use('/user', UserRoutes)
routes.use('/pokemon', pokemonRoutes)

module.exports = routes