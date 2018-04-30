export default {
	mounted () {
		this.setData()
	},
	computed: {
		getMapData () {
			return this.$store.state.mapData.data
		}
	},
	methods: {
		setData () {
			this.$store.dispatch('setData')
		}
	}
}
