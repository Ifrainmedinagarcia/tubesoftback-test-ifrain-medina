const express = require('express')
const timeController = require('../controllers/time.controller')
const router = express.Router()

router.post('/', timeController.saveTime)
router.get('/', timeController.getTime)
router.delete('/:id', timeController.deleteTime)


module.exports = router