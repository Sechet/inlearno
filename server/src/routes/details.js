import express from 'express'
import DataController from './../controllers/DataController'

const details = express.Router()

details.route('/:id')
	.get(DataController.getDetails)

export default details
