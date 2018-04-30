<template lang='pug'>
	include ./../tools/pug/mixins.pug
	GmapInfoWindow(
		v-if='setMapDetails'
		:options='infoOptions'
		:position='{lat: setMapDetails.latitude, lng: setMapDetails.longitude}'
		:opened='!!setMapDetails'
		@closeclick='closeWindow'
	)
		+b.info
			+e.item_img
				img(
					:src='setMapDetails.image'
					:alt='setMapDetails.name'
				).info__img
			+e.item_content
				+e('h3').name
					| {{setMapDetails.name}}
				+e('p').description
					| {{setMapDetails.description}}
</template>

<script>
import setDetailsMixin from './../mixins/setDetailsMixin'

export default {
	name: 'AppInfo',
	props: ['id'],
	mixins: [
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
		closeWindow () {
			this.$router.push({
				path: '/map'
			})
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.info
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
