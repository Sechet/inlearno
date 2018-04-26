import express from 'express'
import DataController from './../controllers/DataController'

const index = express.Router()

index.route('/')
	.get(DataController.getData)

export default index
