module.exports = (sequelize, Sequelize) => {
	const Data = sequelize.define('Data', {
		name: {
			type: Sequelize.STRING
		},
		latitude: {
			type: Sequelize.INTEGER
		},
		longitude: {
			type: Sequelize.INTEGER
		}
	})

	Data.associate = function (models) {
	}

	return Data
}
