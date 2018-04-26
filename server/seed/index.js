require('babel-core/register')

const {
	sequelize,
	Data,
	Details
} = require('../src/models')

const Promise = require('bluebird')
const data = require('./data.json')
const details = require('./details.json')

sequelize.sync({force: true})
	.then(async function () {
		await Promise.all(
			data.map(item => {
				Data.create(item)
			})
		)

		await Promise.all(
			details.map(detail => {
				Details.create(detail)
			})
		)
	})
