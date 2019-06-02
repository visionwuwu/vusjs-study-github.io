const express = require('express')

const app = express()

const router = require('./routers.js')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded( { extended: false} ))

app.use(bodyParser.json())

app.use(router)

app.listen(5000, function () {
	console.log('Server Is Running...')
})