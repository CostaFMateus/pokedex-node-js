const { Router } = require('express')
const routes = Router()

const pokemonController = require('../../controllers/pokemonController')

routes.get('/', pokemonController.index)
routes.get('/:id', pokemonController.show)


module.exports = routes