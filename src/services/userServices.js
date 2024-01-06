const bcrypt = require('bcrypt')

const User = require('../models/UserModel')

module.exports = {
    async create(name, username, password) {
        const hash = await bcrypt.hash(password, 7)
        await User.create({
            name,
            username,
            password: hash,
        })
        return { success: true, message: 'User successfully created' }
    },

    async index() {
        const users = await User.find()

        return { success: true, message: 'User successfully recovered',
        result: users,
    }
    },

    async show(id) {
        const user = await User.findById(id)

        return { success: true,
        message: 'User recovered successfully',
        result: user,
        }
    },
        
    async update(id, name, username) {
        await User.findByIdAndUpdate(id,{
            name,
            username,
          })
        return { success: true, message: 'User changed successfully' }
    },
    
        
    async delete(id) {
        await User.findByIdAndDelete(id)

        return { success: true, message: 'User deleted successfully' }
    },
}