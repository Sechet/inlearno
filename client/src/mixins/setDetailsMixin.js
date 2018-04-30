export default {
	mounted () {
		this.setDetails(this.id)
	},
	computed: {
		setMapDetails () {
			if (!isNaN(Number(this.id))) {
				return this.$store.getters.getDetailsById(Number(this.id))
			}
		}
	},
	methods: {
		setDetails (value) {
			if (!isNaN(Number(value))) {
				this.$store.dispatch('setDetails', Number(value))
			}
		}
	}
}
