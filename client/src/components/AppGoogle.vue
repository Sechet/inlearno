<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.google
		AppSpinner(v-if='getMapData.length == 0')
		GmapMap(
			v-else
			:center='{lat:54.184022, lng:63.305628}'
			:zoom='8'
			style='width: 100%; height: 500px'
		)
			GmapMarker(
				v-for='(marker, index) in getMapData'
				:key='index'
				:position='{lat:marker.latitude, lng:marker.longitude}'
				:clickable='true'
				:draggable='true'
				@click='initDetails(index)'
			)
			slot
</template>

<script>
import AppSpinner from './AppSpinner'
import getDataMixin from './../mixins/getDataMixin'

export default {
	name: 'AppGoogle',
	components: {
		AppSpinner
	},
	mixins: [
		getDataMixin
	],
	methods: {
		initDetails (data) {
			this.$router.push({
				name: 'info',
				params: {
					id: ++data
				}
			})
		}
	}
}
</script>
