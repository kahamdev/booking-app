const express = require('express')
const router = express.Router()

const personDetails= require('../controllers/controllers')

router.post('/sendPersonInfo',personDetails)
module.exports = router;