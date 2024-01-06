const UserService = require('../services/userServices')

module.exports = {
  async creat(req, res) {
    try {
      const {
        name,
        username,
        password,
      } = req.body

      const response = await UserService.create(
        name,
        username,
        password
      )
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, mensage: 'Failed to creat user' })
    }
  },

  async index(req, res) {
    try {
      const response = await UserService.index()
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, message: 'Failed to fetch users' })
    }
  },

  async show(req, res) {
    try {
      const {
        id,
      } = req.params
      const response = await UserService.show(id)
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, message: 'Failed to retrive users' })
    }
  },

  async update(req, res) {
    try {
      const {
        id,
      } = req.params
      const {
        name,
        username,
      } = req.body

      const response = await UserService.update(
        id,
        name,
        username
      )
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, messagem: 'Failed to change users' })
    }
  },

  async delete(req, res) {
    try {
      const {
        id,
      } = req.params
      const response = await UserService.delete(id)
      return res.json(response)
    } catch (error) {
      return res.json({ sucess: false, message: 'Failed to delete users' })
    }
    
  },
}