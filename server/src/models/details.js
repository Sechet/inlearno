module.exports = (sequelize, Sequelize) => {
	const Details = sequelize.define('Details', {
		name: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		image: {
			type: Sequelize.STRING
		},
		latitude: {
			type: Sequelize.INTEGER
		},
		longitude: {
			type: Sequelize.INTEGER
		}
	})

	Details.associate = function (models) {
	}

	return Details
}
