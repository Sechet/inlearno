import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import config from './../config'
import {sequelize} from './models'

// Routes
import index from './routes'
import details from './routes/details'

const app = express()

// Middleware
app
	.use(morgan('combined'))
	.use(helmet())
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(cors())
	.use(compression())

// Endpoints
app
	.use('/', index)
	.use('/details', details)

// Catch 404
app.use((req, res, next) => {
	const err = new Error('404, Not Found')
	err.status = 404
	next(err)
})

sequelize.sync()
	.then(() => {
		app.listen(config.port)
		console.log(`Database connected and Server listening on port ${config.port}...`)
	}).catch(err => {
		console.error('Unable to connect to the database:', err)
	})
