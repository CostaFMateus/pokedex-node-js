const PokemonService = require('../services/pokemonServices')

module.exports = {

  async index(req, res) {

    try {
      const {
        page,
        perPage
      } = req.query

      const response = await PokemonService.index(page, perPage)
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, message: 'Failed to fetch pokemon' })
    }
  },

  async show(req, res) {
    try {
      const {
        id,
      } = req.params
      const response = await PokemonService.show(id)
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, message: 'Failed to retrive pokemon' })
    }
  },

}