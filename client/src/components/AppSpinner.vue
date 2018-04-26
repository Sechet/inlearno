<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.spinner
		+e.item
</template>

<script>
export default {
	name: 'AppSpinner'
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.spinner
		height 50vh

		display flex
		justify-content center
		align-items center

		&__item
			size(40px)

			border solid 6px $colorGreen
			border-top solid 6px $colorDark
			border-radius 50%

			animation spin 1.5s linear infinite

	@keyframes spin
		0%
			transform rotate(0deg)
		100%
			transform rotate(360deg)
</style>
