const express = require('express')

const app = express()

var arr = [
	{
		name: 'index1'
	},
	{
		name: 'index1'
	},
	{
		name: 'index1'
	},
	{
		name: 'index1'
	}
]

app
	.get('/', function (req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.json({
			data: arr
		})
	})
	.get('/money', function (req, res) {

	})
	.get('/friend', function (req, res) {

	})
	.get('/mine', function (req, res) {

	})

app.listen(5000, function () {
	console.log('Server is Running')
})