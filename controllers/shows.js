const db = require('../db/connection')
const Show = require('../models/show')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getShows = async (req, res) => {
    try {
        const show = await Show.find()
        res.json(show)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getShows,
}