import Api from './api'

export default {
	getData (data) {
		return Api().get('/', data)
	},
	getDetails (data) {
		return Api().get(`details/${data}`)
	}
}
