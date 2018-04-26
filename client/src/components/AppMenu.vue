<template lang='pug'>
	menu.menu
		ul.menu__nav.nav
			router-link(
				v-for='item in menu'
				:key='item.name'
				tag='li'
				:to='item.path'
				exact
			).nav__item
				template(v-if='item.path !== $route.fullPath')
					a.nav__link {{item.name}}
				template(v-else)
					| {{item.name}}
</template>

<script>
export default {
	name: 'AppMenu',
	data () {
		return {
			menu: this.$router.options.routes
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.menu
		margin-bottom 36px

	.nav
		display flex
		justify-content center

		& :first-child
			margin-left 0

		& :last-child
			padding-right 0

			border-right none

		&__item
			margin-left 9px
			padding-right 9px

			fontSize(18, 24)
			font-weight 700

			border-right solid 1px rgba($colorDark, .8)

			&.active
				color $colorGreen

			& a
				text-decoration none

				color $colorDark
</style>
