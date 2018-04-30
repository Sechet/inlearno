<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.map
		AppGoogle
			router-view
</template>

<script>
import AppGoogle from './../components/AppGoogle'

export default {
	name: 'AppMap',
	components: {
		AppGoogle
	}
}
</script>
