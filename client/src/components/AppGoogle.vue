<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.map
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
				@click='toggleInfoWindow(index)'
			)
			GmapInfoWindow(
				v-if='setMapDetails'
				:options='infoOptions'
				:position='{lat: this.setMapDetails.latitude, lng: this.setMapDetails.longitude}'
				:opened='!!setMapDetails'
				@closeclick='closeWindow'
			)
				+e.wrapper
					+e.item_img
						img(
							:src='setMapDetails.image'
							:alt='setMapDetails.name'
						).map__img
					+e.item_content
						+e('h3').name
							| {{setMapDetails.name}}
						+e('p').description
							| {{setMapDetails.description}}
</template>

<script>
import getDataMixin from './../mixins/getDataMixin'
import setDetailsMixin from './../mixins/setDetailsMixin'
import AppSpinner from './AppSpinner'

export default {
	name: 'AppGoogle',
	components: {
		AppSpinner
	},
	mixins: [
		getDataMixin,
		setDetailsMixin
	],
	data () {
		return {
			infoOptions: {
				pixelOffset: {
					width: 0,
					height: -35
				}
			}
		}
	},
	methods: {
		toggleInfoWindow (idx) {
			this.$router.push({
				query: {id: ++idx}
			})
		},
		closeWindow () {
			this.$router.push({
				query: {}
			})
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.map
		&__wrapper
			display flex

		&__item
			&_img
				margin-right 14px

		&__img
			size(120px, 80px)

			display block

		&__name
			margin-bottom 6px

			fontSize(20px)
			font-weight bold
			color $colorDark

		&__description
			fontSize(16px, 21px)
</style>
