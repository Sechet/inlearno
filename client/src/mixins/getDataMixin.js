export default {
	computed: {
		getMapData () {
			this.$store.dispatch('setData')
			return this.$store.getters.getData
		}
	}
}
