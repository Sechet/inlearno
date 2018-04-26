<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.modal
		+e('button')(@click='close').close
		AppSpinner(v-if='!setMapDetails')
		+e.conteiner(v-else)
			+e.item_img
				img(
					:src='setMapDetails.image'
					:alt='setMapDetails.name'
				).modal__img
			+e.item_text
				+e('h2').subheader {{setMapDetails.name}}
				+e('p').description
					| {{setMapDetails.description}}
				+e.coordinates
					| <span>latitude:</span> {{setMapDetails.latitude}} <span>longitude:</span> {{setMapDetails.longitude}}
</template>

<script>
import AppSpinner from './AppSpinner'
import setDetailsMixin from './../mixins/setDetailsMixin'

export default {
	name: 'AppModal',
	components: {
		AppSpinner
	},
	mixins: [
		setDetailsMixin
	],
	methods: {
		close () {
			this.$router.push({
				query: {}
			})
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.modal
		width 100vw
		height 100vh

		background-color #FFF

		position fixed
		top 0
		left 0

		display flex
		justify-content center
		align-items center

		&__close
			size(40px)

			border none
			border-radius 50%

			background $colorGreen

			position absolute
			top 5%
			right 5%

			&::before, &::after
				content ''

				size(20px, 2px)

				display block

				position absolute
				left 10px

				background $colorDark

			&::before
				transform rotate(45deg)

			&::after
				transform rotate(-45deg)

		&__conteiner
			width 760px

			display flex

		&__item
			&_img
				flex-basis 380px
			&_text
				flex-basis 380px

		&__img
			size(360px, 240px)

		&__subheader
			margin-bottom 12px

			fontSize(28px)
			color $colorDark

		&__description
			margin-bottom 12px

			fontSize(16px, 22px)
			color rgba($colorDark, .85)

		&__coordinates
			fontSize(16px, 19px)
			color rgba($colorDark, .95)

			& span
				fontSize(13px, 19px)
				color rgba($colorDark, .7)
</style>
