const express = require('express')

const router = express.Router()

var arr = [
	{
		id: 1,
		name: 'yan',
		age: '16'
	},
	{
		id: 2,
		name: 'wu',
		age: '17'
	},
	{
		id: 3,
		name: 'meng',
		age: '18'
	},
	{
		id: 4,
		name: 'xi',
		age: '19'
	}
]

router
	.get('/todos', function (req, res) {

		res.setHeader('Access-Control-Allow-Origin', '*')

		res.json({
			data: arr
		})
	})
	.post('/todos/add', function (req, res) {

		res.setHeader('Access-Control-Allow-Origin', '*')

		var data = req.body
		
		arr.push(data)

		res.json({
			id: arr[arr.length-1].id + 1,
			age: data.age,
	
		name: data.name
		})

	})
	.patch('/todos/editById', function (req, res) {

		var data = req.body

		for (var i = 0; i < arr.length; i++) {
			if ( arr[i].id === parseInt(data.id)) {

				arr[i].name = data.name

				arr[i].age = data.age 

				return res.json(arr[i])
			}
		}
	})
	.delete('/todos/deleteById', function (req, res) {

		var data = req.query
		
		for (var i = 0; i < arr.length; i++) {
			if ( arr[i].id == parseInt(data.id)) {

				arr.splice(i, 1)

				return res.json(arr)
			}
		}

	})

module.exports = router