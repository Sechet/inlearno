export default {
	computed: {
		setMapDetails () {
			const id = Number(this.$route.query.id)
			if (id) {
				this.$store.dispatch('setDetails', id)
				return this.$store.getters.getDetailsById(id)
			}
		}
	}
}
