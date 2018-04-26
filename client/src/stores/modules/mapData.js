import * as types from './../mytation-types'
import getDataService from './../../services/getDataService'

const state = {
	data: [],
	details: []
}

const getters = {
	getData: state => {
		return state.data
	},
	getDetailsById: state => id => {
		return state.details.find(item => item.id === id)
	}
}

const mutations = {
	[types.SET_DATA] (state, payload) {
		state.data = payload
	},
	[types.SET_DETAILS] (state, payload) {
		state.details.push(payload)
	}
}

const actions = {
	async setData ({commit}) {
		try {
			if (state.data.length === 0) {
				const {data} = (await getDataService.getData())
				commit('SET_DATA', data)
			}
		} catch (err) {
			console.log(err)
		}
	},
	async setDetails ({commit}, id) {
		try {
			const res = state.details.find(item => item.id === id)
			if (!res) {
				const {data} = (await getDataService.getDetails(id))
				commit('SET_DETAILS', data)
			}
		} catch (err) {
			console.log(err)
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
