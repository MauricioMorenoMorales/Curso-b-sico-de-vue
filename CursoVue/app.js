Vue.component('CoinDetail',{
	props: ['coin'],
	data(){
		return {
			showPrices: false,
			value: 0,
		}
	},
	methods: {
		toggleShowPrices(){
			this.showPrices = !this.showPrices

			this.$emit('change-color', this.showPrices ? 'ff96c8': '3d3d3d')
		},
	},
	computed: {
		computedTitle(){
			return `${this.coin.name} - ${this.coin.symbol}`
		},
		convertedValue(){
			if(!this.value){
				return 0
			}
			return this.value / this.coin.price
		}
	},
	template : `
	<div>
		<img
			v-on:mouseover="toggleShowPrices"
			v-on:mouseout="toggleShowPrices"
			v-bind:src="coin.img"
			v-bind:alt="coin.name"
		>
		<h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
			{{title}}
			<span v-if="changePercent > 0">::</span>
			<span v-else>Chales</span>
			<span v-on:click="toggleShowPrices">
					{{showPrices ? 'Ocultar' : 'Mostrar😎'}}
			</span>
		</h1>
		<input type="number" v-model="value"><br>
		<span>{{ convertedValue }}</span>
		<slot name="text"></slot>
		<slot name="link"></slot>
		<ul v-show="showPrices">
		<li
		class="uppercase"
		v-bind:class="{orange: p.value === coin.price,
						red: p.value < coin.price,
						green: p.value > coin.price}"
		v-for="(p, i) in pricesWithDays"
		v-bind:key="p.day">
				{{i}} - {{ p.day }} - {{p.value}}
		</li>
</ul>

	</div>
	`
})

new Vue({
	el: '#app',
	data(){ return{
			btc: {
				name: 'Bitcoin',
				symbol: 'BTC',
				img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
				changePercent: 1,
				price: 8400,
				pricesWithDays:[
					{ day: 'Lunes', value: 8400 },
					{ day: 'Martes', value: 7900 },
					{ day: 'Miercoles', value: 8200 },
					{ day: 'Jueves', value: 9000 },
					{ day: 'Viernes', value: 9400 },
					{ day: 'Sabado', value: 10000 },
					{ day: 'Domingo', value: 10200 },
				],
			},
			color: '4f4f4f',
			title: 'Bitcoin',
		}
	},

	created(){
		console.log('creatd')
	},
	mounted(){
		console.log('Mounted')
	},

	methods: {
		updateColor(color){
			this.color = color || this.color
			this.showPrices = !this.showPrices
			this.color = this.color
				.split('')
				.reverse('')
				.join('')
		}
	}
})

/* Se pueden acceder a valores de data asignandole una variable a la instancia y con el
Metodo de el punto  <app.title> */
