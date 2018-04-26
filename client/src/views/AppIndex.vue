<template lang='pug'>
	include ./../tools/pug/mixins.pug
	.index
		AppTable
		transition(name='fade')
			AppModal(v-if='Number(this.$route.query.id)')
</template>

<script>
import AppTable from './../components/AppTable'
import AppModal from './../components/AppModal'

export default {
	name: 'AppIndex',
	components: {
		AppTable,
		AppModal
	}
}
</script>

<style lang='stylus' scoped>
	.fade-enter-active, .fade-leave-active
		transition opacity .5s

	.fade-enter, .fade-leave-to
		opacity 0

</style>
