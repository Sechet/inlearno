import AppIndex from './../views/AppIndex.vue'
import AppMap from './../views/AppMap.vue'
import AppModal from './../components/AppModal.vue'
import AppInfo from './../components/AppInfo.vue'

export const routes = [
	{
		path: '/',
		name: 'Таблица',
		component: AppIndex,
		children: [
			{
				path: 'details/:id',
				name: 'modal',
				component: AppModal,
				props: true
			}
		]
	},
	{
		path: '/map',
		name: 'Карта',
		component: AppMap,
		children: [
			{
				path: 'info/:id',
				name: 'info',
				component: AppInfo,
				props: true
			}
		]
	}
]
