Vue.component('mysearchbtn', {
	template: `<div>
    <input type="text" placeholder="検索ワード"
      v-model="search" id="searchbox"
      @input="$emit('update:search', $event.target.value)" />
</div>`,
	props: ['search'],
})

new Vue({
	el: '#app',
	data() {
		return {
			json: [],
			search: '',
			results: [],
		}
	},
	mounted() {
		axios.get('/index.json').then((response) => {
			this.json = response.data
		})

		this.$watch('search', () => {
			this.results = []
			if (this.search == '') return
			for (let i = 0; i < this.json.length; i++) {
                const target = this.json[i].body
				if (target.match(new RegExp(this.search, 'i'))) {
					this.results.push(this.json[i])
				}
			}
		})
	},
})
