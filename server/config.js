module.exports = {
	port: process.env.PORT || 3000,
	db: {
		database: process.env.DB_NAME || 'inlearno',
		username: process.env.DB_USER || 'inlearnouser',
		password: process.env.DB_PASS || 'inlearnopass',
		options: {
			host: process.env.HOST || 'localhost',
			dialect: process.env.DIALECT || 'sqlite',
			storage: './inlearno.sqlite',
			operatorsAliases: process.env.OPERATORS || false
		}
	}
}
