const { Router } = require('express')
const controllers = require('../controllers/shows')
const restrict = require('../helpers/restrict')

const router = Router()
router.get('/', controllers.getShows)
router.get('/:id', controllers.getShow)
// restricted
router.post('/',restrict, controllers.createShow)
router.put('/:id', restrict, controllers.updateShow)
router.delete('/:id', restrict, controllers.deleteShow)


module.exports = router