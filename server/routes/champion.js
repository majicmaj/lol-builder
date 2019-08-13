const express = require('express')
const router = express.Router()
const championController = require('../controllers/champion')

router.get('/', championController.show)
router.get('/name/:name', championController.showByName)
router.get('/id/:id', championController.showById)
router.get('/tags/:tags', championController.showByTag)

module.exports = router