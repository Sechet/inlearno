import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from './../../config'
const db = {}

// Connect to data base
const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options
)

// Connect all db models
fs
	.readdirSync(__dirname)
	.filter((file) =>
		(file.indexOf('.') !== 0) && (file !== 'index.js')
	)
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model
	})

Object.keys(db).forEach(function (modelName) {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
