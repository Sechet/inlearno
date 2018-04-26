import {Data, Details} from './../models'

module.exports = {
	async getData (req, res) {
		try {
			const dataVacation = await Data.findAll()
			res.status(200).send(dataVacation)
		} catch (err) {
			res.status(400).send({
				error: 'Hет данных!'
			})
		}
	},
	async getDetails (req, res) {
		try {
			const DetailId = req.params.id
			const details = await Details.findOne({
				where: {
					id: DetailId
				}
			})
			if (!details) {
				return res.status(403).send({
					error: 'Нет данных!'
				})
			}
			res.status(200).send(details)
		} catch (err) {
			res.status(400).send({
				error: 'Hет данных!'
			})
		}
	}
}
