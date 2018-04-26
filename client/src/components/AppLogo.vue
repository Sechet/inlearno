<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.logo
		template(v-if='showLink')
			+e('router-link')(to='/').link
				+e('img')(
					src='./../assets/logo.png'
					alt='Логотип'
				).img
		template(v-else)
			+e('img')(
				src='./../assets/logo.png'
				alt='Логотип'
			).img
</template>

<script>
export default {
	name: 'AppLogo',
	computed: {
		showLink () {
			if (this.$route.path !== '/') return true
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.logo
		margin-y(54px)

		display flex
		justify-content center

		&__img
			size(140px)

			display block
</style>
