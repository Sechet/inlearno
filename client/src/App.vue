<template lang='pug'>
	#app
		AppLogo
		AppMenu
		transition(name='fade' mode='out-in')
			router-view
</template>

<script>
import AppLogo from './components/AppLogo'
import AppMenu from './components/AppMenu'

export default {
	name: 'App',
	components: {
		AppLogo,
		AppMenu
	},
	data () {
		return {
			content: false
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './tools/styles/app.styl'
	#app
		margin-x(auto)

		max-width $maxWidth
		min-width $minWidth

		font-style $fontFamily
		fontSize(16, 22)

	.fade-enter-active, .fade-leave-active
		transition opacity .5s

	.fade-enter, .fade-leave-to
		opacity 0
</style>
