/* global
	generateId toCurrency
*/

/* exported ShedCalculatorDelivery */
const ShedCalculatorDelivery = {
	props: {
		id: {
			type: String,
			default() {
				return generateId();
			}
		},
		value: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		const choices = [
			{ location: 'Ancaster', price: 0 },
			{ location: 'Beamsville', price: 150 },
			{ location: 'Binbrook', price: 0 },
			{ location: 'Brampton', price: 350 },
			{ location: 'Breslau', price: 0 },
			{ location: 'Burlington', price: 0 },
			{ location: 'Caledonia', price: 0 },
			{ location: 'Cambridge', price: 0 },
			{ location: 'Cayuga', price: 50 },
			{ location: 'Drumbo', price: 0 },
			{ location: 'Dundas', price: 0 },
			{ location: 'Dunnville', price: 200 },
			{ location: 'Elmira', price: 100 },
			{ location: 'Elora', price: 200 },
			{ location: 'Etobicoke', price: 350 },
			{ location: 'Fergus', price: 200 },
			{ location: 'Flamboro Downs', price: 0 },
			{ location: 'Flamborough', price: 0 },
			{ location: 'Fonthill', price: 250 },
			{ location: 'Fort Erie', price: 350 },
			{ location: 'Freelton', price: 0 },
			{ location: 'Georgetown', price: 300 },
			{ location: 'Grimsby', price: 100 },
			{ location: 'Guelph', price: 75 },
			{ location: 'Hagersville', price: 0 },
			{ location: 'Hamilton', price: 0 },
			{ location: 'Hannon', price: 0 },
			{ location: 'Kitchener', price: 0 },
			{ location: 'London', price: 200 },
			{ location: 'Milton', price: 300 },
			{ location: 'Mississauga', price: 300 },
			{ location: 'Mount Hope', price: 0 },
			{ location: 'New Hamburg', price: 50 },
			{ location: 'Niagara Falls', price: 250 },
			{ location: 'Oakville', price: 100 },
			{ location: 'Pelham', price: 200 },
			{ location: 'Port Colborne', price: 250 },
			{ location: 'Port Rowan', price: 150 },
			{ location: 'Port Stanley', price: 175 },
			{ location: 'Rock Wood', price: 100 },
			{ location: 'Smithville', price: 200 },
			{ location: 'St. Catherine/ Thorold', price: 200 },
			{ location: 'Tilsonburg', price: 0 },
			{ location: 'Toronto East (East of Allan Road)', price: 600 },
			{ location: 'Toronto West (West of Allan Road)', price: 500 },
			{ location: 'Turkey Point', price: 50 },
			{ location: 'Vineland', price: 150 },
			{ location: 'Wainfleet', price: 200 },
			{ location: 'Welland', price: 250 }
		];

		const selected = this.value && this.value.location
			? choices.map((choice) => choice.location).indexOf(this.value.location)
			: -1;

		return { choices, selected };
	},
	computed: {
		options() {
			const options = this.choices.map(({ location, price }, index) => {
				return {
					text: `${location} - ${price === 0 ? 'Free' : toCurrency(price).dollars}`,
					value: index
				};
			});

			return [
				{ text: 'None', value: -1 },
				...options
			];
		}
	},
	methods: {
		onInput() {
			if (this.selected === -1) {
				this.value = {};
			} else {
				const { location, price } = this.choices[this.selected];
				this.value = { location, price };
			}

			this.$emit('input', this.value);
		}
	},
	template: `
		<b-form-group
			label="Delivery"
			v-bind:id="id"
			v-bind:label-for="id + '_input'"
		>
			<b-form-select
				size="lg"
				v-bind:id="id + '_input'"
				v-bind:options="options"
				v-on:input="onInput"
				v-model="selected"
			></b-form-select>
		</b-form-group>
	`
};
