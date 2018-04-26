import AppIndex from './../views/AppIndex.vue'
import AppMap from './../views/AppMap.vue'

export const routes = [
	{
		path: '/',
		name: 'Таблица',
		component: AppIndex
	},
	{
		path: '/map',
		name: 'Карта',
		component: AppMap
	}
]
