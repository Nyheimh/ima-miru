const { Router } = require('express')
const controllers = require('../controllers/shows')
const router = Router()

router.get('/shows', controllers.getShows)

module.exports = router