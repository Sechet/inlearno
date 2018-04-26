<template lang='pug'>
	include ./../tools/pug/mixins.pug
	+b.wrapper
		AppSpinner(v-if='getMapData.length === 0')
		+b('table')(v-else).table
			+e('thead').header.header__
				+e('tr').item.row__
					+e('td').item_id Идентификатор
					+e('td').item_name Название
					+e('td')(colspan='2').item_map Координаты
				+e('tr').item.sub__
					+e('td').item id
					+e('td').item город, населенный пункт, поселение
					+e('td').item latitude
					+e('td').item longitude
			+e('tbody').body.body__
				+e('tr')(
					v-for='item in getMapData'
					:key='item.id'
					@click='showModal(item.id)'
				).row
					+e('td').item {{item.id}}
					+e('td').item {{item.name}}
					+e('td').item {{item.latitude}}
					+e('td').item {{item.longitude}}
</template>

<script>
import getDataMixin from './../mixins/getDataMixin'
import AppSpinner from './AppSpinner'

export default {
	name: 'AppTable',
	components: {
		AppSpinner
	},
	mixins: [
		getDataMixin
	],
	methods: {
		showModal (data) {
			this.$router.push({
				query: {id: data}
			})
		}
	}
}
</script>

<style lang='stylus' scoped>
	@import './../tools/styles/app.styl'
	.table
		width 100%
		margin-bottom 27px

		&__header
			border-bottom solid 1px rgba($colorDark, .35)

	.row
		fontSize(14, 18)
		font-weight bold
		color $colorDark

		background-color $colorGreen

		&__item
			padding-all(12px, 0, 12px, 18px)

			&_id
				width 15%

			&_name
				width 45%

			&_map
				width 40%

	.sub
		fontSize(12, 18)
		color rgba($colorDark, .8)

		background-color transparent

		&__item
			padding-all(6px, 0, 6px, 18px)

	.body
		&__row
			color $colorDark

			cursor pointer

			transition background-color .3s ease-out

			&:hover
				background-color rgba($colorDark, .1)

		&__item
			padding-all(12px, 0, 12px, 18px)

			border-bottom solid 1px rgba($colorDark, .1)
</style>
