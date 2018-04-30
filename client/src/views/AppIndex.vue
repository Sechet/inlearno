<template lang='pug'>
	include ./../tools/pug/mixins.pug
	.index
		AppTable
		transition(name='fade')
			router-view
</template>

<script>
import AppTable from './../components/AppTable'

export default {
	name: 'AppIndex',
	components: {
		AppTable
	}
}
</script>

<style lang='stylus' scoped>
	.fade-enter-active, .fade-leave-active
		transition opacity .5s

	.fade-enter, .fade-leave-to
		opacity 0

</style>
