/* global
	Vue
	generateId toCurrency
*/

/* exported ShedCalculatorShed */
const ShedCalculatorShed = {
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
			{
				name: 'Classic Style',
				heights: [
					{
						name: 'Low Gable',
						description: '5 feet 5 inch  ( 65" ) eaves',
						sizes: [
							{ gableSize: 8, sideWallLength: 6, price: 2100 },
							{ gableSize: 8, sideWallLength: 8, price: 2300 },
							{ gableSize: 8, sideWallLength: 10, price: 2500 },
							{ gableSize: 8, sideWallLength: 12, price: 2700 },
							{ gableSize: 10, sideWallLength: 8, price: 2700 },
							{ gableSize: 10, sideWallLength: 10, price: 2900 }
						]
					},
					{
						name: 'Medium Gable',
						description: '6 feet ( 72" ) eaves',
						sizes: [
							{ gableSize: 8, sideWallLength: 6, price: 2300 },
							{ gableSize: 8, sideWallLength: 8, price: 2500 },
							{ gableSize: 8, sideWallLength: 10, price: 2700 },
							{ gableSize: 8, sideWallLength: 12, price: 2900 },
							{ gableSize: 10, sideWallLength: 8, price: 3100 },
							{ gableSize: 10, sideWallLength: 10, price: 3300 }
						]
					},
					{
						name: 'High Gable',
						description: '7 feet ( 84" ) eaves',
						sizes: [
							{ gableSize: 8, sideWallLength: 6, price: 2700 },
							{ gableSize: 8, sideWallLength: 8, price: 2900 },
							{ gableSize: 8, sideWallLength: 10, price: 3100 },
							{ gableSize: 8, sideWallLength: 12, price: 3300 },
							{ gableSize: 8, sideWallLength: 14, price: 4400 },
							{ gableSize: 8, sideWallLength: 16, price: 4700 },
							{ gableSize: 8, sideWallLength: 18, price: 5200 },
							{ gableSize: 8, sideWallLength: 20, price: 5700 },
							{ gableSize: 8, sideWallLength: 22, price: 6200 },
							{ gableSize: 8, sideWallLength: 24, price: 6700 },
							{ gableSize: 10, sideWallLength: 8, price: 3300 },
							{ gableSize: 10, sideWallLength: 10, price: 3500 },
							{ gableSize: 10, sideWallLength: 12, price: 4500 },
							{ gableSize: 10, sideWallLength: 14, price: 5200 },
							{ gableSize: 10, sideWallLength: 16, price: 5900 },
							{ gableSize: 10, sideWallLength: 18, price: 6600 },
							{ gableSize: 10, sideWallLength: 20, price: 7300 },
							{ gableSize: 10, sideWallLength: 22, price: 8000 },
							{ gableSize: 10, sideWallLength: 24, price: 8700 },
							{ gableSize: 12, sideWallLength: 10, price: 5800 },
							{ gableSize: 12, sideWallLength: 12, price: 6500 },
							{ gableSize: 12, sideWallLength: 14, price: 7200 },
							{ gableSize: 12, sideWallLength: 16, price: 7900 },
							{ gableSize: 12, sideWallLength: 18, price: 8600 },
							{ gableSize: 12, sideWallLength: 20, price: 9300 },
							{ gableSize: 12, sideWallLength: 22, price: 10000 },
							{ gableSize: 12, sideWallLength: 24, price: 10700 },
							{ gableSize: 14, sideWallLength: 10, price: 8500 },
							{ gableSize: 14, sideWallLength: 12, price: 9100 },
							{ gableSize: 14, sideWallLength: 14, price: 9700 },
							{ gableSize: 14, sideWallLength: 16, price: 10300 },
							{ gableSize: 14, sideWallLength: 18, price: 10900 },
							{ gableSize: 14, sideWallLength: 20, price: 11500 },
							{ gableSize: 14, sideWallLength: 22, price: 12100 },
							{ gableSize: 14, sideWallLength: 24, price: 12700 },
							{ gableSize: 16, sideWallLength: 10, price: 10500 },
							{ gableSize: 16, sideWallLength: 12, price: 11100 },
							{ gableSize: 16, sideWallLength: 14, price: 11700 },
							{ gableSize: 16, sideWallLength: 16, price: 12300 },
							{ gableSize: 16, sideWallLength: 18, price: 12900 },
							{ gableSize: 16, sideWallLength: 20, price: 13500 },
							{ gableSize: 16, sideWallLength: 22, price: 14100 },
							{ gableSize: 16, sideWallLength: 24, price: 14700 }
						]
					}
				]
			},
			{
				name: 'Board and Batten',
				heights: [
					{
						name: 'Medium Gable',
						description: '6 feet ( 72" ) eave',
						sizes: [
							{ gableSize: 8, sideWallLength: 6, price: 2600 },
							{ gableSize: 8, sideWallLength: 8, price: 2900 },
							{ gableSize: 8, sideWallLength: 10, price: 3200 },
							{ gableSize: 8, sideWallLength: 12, price: 3500 },
							{ gableSize: 10, sideWallLength: 8, price: 3500 },
							{ gableSize: 10, sideWallLength: 10, price: 3800 }
						]
					},
					{
						name: 'High Gable',
						description: '7 feet ( 84" ) eave',
						sizes: [
							{ gableSize: 8, sideWallLength: 6, price: 3100 },
							{ gableSize: 8, sideWallLength: 8, price: 3300 },
							{ gableSize: 8, sideWallLength: 10, price: 3500 },
							{ gableSize: 8, sideWallLength: 12, price: 3900 },
							{ gableSize: 8, sideWallLength: 14, price: 4700 },
							{ gableSize: 8, sideWallLength: 16, price: 5100 },
							{ gableSize: 8, sideWallLength: 18, price: 5500 },
							{ gableSize: 8, sideWallLength: 20, price: 5900 },
							{ gableSize: 8, sideWallLength: 22, price: 5500 },
							{ gableSize: 8, sideWallLength: 24, price: 6700 },
							{ gableSize: 10, sideWallLength: 8, price: 3800 },
							{ gableSize: 10, sideWallLength: 10, price: 4100 },
							{ gableSize: 10, sideWallLength: 12, price: 5200 },
							{ gableSize: 10, sideWallLength: 14, price: 6000 },
							{ gableSize: 10, sideWallLength: 16, price: 6800 },
							{ gableSize: 10, sideWallLength: 18, price: 7600 },
							{ gableSize: 10, sideWallLength: 20, price: 8400 },
							{ gableSize: 10, sideWallLength: 22, price: 9200 },
							{ gableSize: 10, sideWallLength: 24, price: 10000 },
							{ gableSize: 12, sideWallLength: 10, price: 6650 },
							{ gableSize: 12, sideWallLength: 12, price: 7500 },
							{ gableSize: 12, sideWallLength: 14, price: 8300 },
							{ gableSize: 12, sideWallLength: 16, price: 9100 },
							{ gableSize: 12, sideWallLength: 18, price: 9900 },
							{ gableSize: 12, sideWallLength: 20, price: 10700 },
							{ gableSize: 12, sideWallLength: 22, price: 11500 },
							{ gableSize: 12, sideWallLength: 24, price: 12300 },
							{ gableSize: 14, sideWallLength: 10, price: 9800 },
							{ gableSize: 14, sideWallLength: 12, price: 10500 },
							{ gableSize: 14, sideWallLength: 14, price: 11150 },
							{ gableSize: 14, sideWallLength: 16, price: 11850 },
							{ gableSize: 14, sideWallLength: 18, price: 12550 },
							{ gableSize: 14, sideWallLength: 20, price: 13200 },
							{ gableSize: 14, sideWallLength: 22, price: 14000 },
							{ gableSize: 14, sideWallLength: 24, price: 14600 },
							{ gableSize: 16, sideWallLength: 10, price: 12050 },
							{ gableSize: 16, sideWallLength: 12, price: 12800 },
							{ gableSize: 16, sideWallLength: 14, price: 13450 },
							{ gableSize: 16, sideWallLength: 16, price: 14150 },
							{ gableSize: 16, sideWallLength: 18, price: 14800 },
							{ gableSize: 16, sideWallLength: 20, price: 15500 },
							{ gableSize: 16, sideWallLength: 22, price: 16200 },
							{ gableSize: 16, sideWallLength: 24, price: 16900 }
						]
					}
				]
			},
			{
				name: 'Lean-to',
				heights: [
					{
						name: 'Lean Down',
						description: '7 feet to 6 feet ( 84" to  72" )',
						sizes: [
							{ gableSize: 4, sideWallLength: 6, price: 1800 },
							{ gableSize: 4, sideWallLength: 8, price: 2000 },
							{ gableSize: 4, sideWallLength: 10, price: 2200 },
							{ gableSize: 4, sideWallLength: 12, price: 2400 },
							{ gableSize: 4, sideWallLength: 14, price: 2600 },
							{ gableSize: 4, sideWallLength: 16, price: 2800 },
							{ gableSize: 6, sideWallLength: 8, price: 2300 },
							{ gableSize: 6, sideWallLength: 10, price: 2500 },
							{ gableSize: 6, sideWallLength: 12, price: 2700 },
							{ gableSize: 6, sideWallLength: 14, price: 3100 },
							{ gableSize: 6, sideWallLength: 16, price: 3500 }
						]
					},
					{
						name: 'Lean Up',
						description: '7 feet to 8 feet ( 84" TO 96" )',
						sizes: [
							{ gableSize: 4, sideWallLength: 6, price: 2000 },
							{ gableSize: 4, sideWallLength: 8, price: 2200 },
							{ gableSize: 4, sideWallLength: 10, price: 2400 },
							{ gableSize: 4, sideWallLength: 12, price: 2600 },
							{ gableSize: 4, sideWallLength: 14, price: 2800 },
							{ gableSize: 4, sideWallLength: 16, price: 3000 },
							{ gableSize: 6, sideWallLength: 8, price: 2500 },
							{ gableSize: 6, sideWallLength: 10, price: 2700 },
							{ gableSize: 6, sideWallLength: 12, price: 2900 },
							{ gableSize: 6, sideWallLength: 14, price: 3300 },
							{ gableSize: 6, sideWallLength: 16, price: 3700 }
						]
					}
				]
			}
		];

		const typeSelected = -1;
		const heightSelected = -1;
		const sizeSelected = -1;

		const gabelPorchChoices = [
			{
				name: '2 Foot Gable Overhang',
				prices: { 8: 200, 10: 250, 12: 450, 14: 650, 16: 850 }
			},
			{
				name: '4 Foot Gable Porch',
				prices: { 8: 650, 10: 800, 12: 950, 14: 1100, 16: 1250 }
			},
			{
				name: '6 Foot Gable Porch',
				prices: { 8: 950, 10: 1100, 12: 1250, 14: 1400, 16: 1550 }
			}
		];

		const sidePorchChoices = [
			{
				name: '2 Foot Side View Overhang',
				prices: { 8: 300, 10: 450, 12: 600, 14: 750, 16: 900, 18: 1050, 20: 1200, 22: 1350, 24: 1500 }
			},
			{
				name: '4 Foot Side View Porch',
				prices: { 8: 700, 10: 850, 12: 1000, 14: 1150, 16: 1300, 18: 1450, 20: 1600, 22: 1750, 24: 1900 }
			},
			{
				name: '6 Foot Side View Porch',
				prices: { 8: 1000, 10: 1150, 12: 1300, 14: 1450, 16: 1600, 18: 1750, 20: 2000, 22: 2150, 24: 2400 }
			}
		];

		const gablePorchSelected = -1;
		const sidePorchSelected = -1;

		return {
			choices,
			typeSelected,
			heightSelected,
			sizeSelected,
			gabelPorchChoices,
			sidePorchChoices,
			gablePorchSelected,
			sidePorchSelected
		};
	},
	computed: {
		sizeOptions() {
			const options = this.choices[this.typeSelected].heights[this.heightSelected].sizes.map(({ gableSize, sideWallLength, price }, index) => {
				return {
					text: `${gableSize} \u2A09 ${sideWallLength} - ${price === 0 ? 'Free' : toCurrency(price).dollars}`,
					value: index
				};
			});

			return [
				{ text: 'Select...', value: -1 },
				...options
			];
		},
		gabelPorchOptions() {
			const { gableSize } = this.choices[this.typeSelected].heights[this.heightSelected].sizes[this.sizeSelected];
			const options = this.gabelPorchChoices.map(({ name, prices }, index) => {
				if (gableSize in prices) {
					const price = prices[gableSize];
					return {
						text: `${name} - ${price === 0 ? 'Free' : toCurrency(price).dollars}`,
						value: index
					};
				}

				return false;
			}).filter((value) => value);

			return [
				{ text: 'None', value: -1 },
				...options
			];
		},
		sidePorchOptions() {
			const { sideWallLength } = this.choices[this.typeSelected].heights[this.heightSelected].sizes[this.sizeSelected];
			const options = this.sidePorchChoices.map(({ name, prices }, index) => {
				if (sideWallLength in prices) {
					const price = prices[sideWallLength];
					return {
						text: `${name} - ${price === 0 ? 'Free' : toCurrency(price).dollars}`,
						value: index
					};
				}

				return false;
			}).filter((value) => value);

			return [
				{ text: 'None', value: -1 },
				...options
			];
		}
	},
	methods: {
		onTypeChange() {
			this.heightSelected = -1;
			this.onHeightChange(this.heightSelected, false);

			if (this.typeSelected === -1) {
				Vue.delete(this.value, 'type');
			} else {
				const { name } = this.choices[this.typeSelected];
				Vue.set(this.value, 'type', name);
			}

			this.$emit('input', this.value);
		},
		onHeightChange(value, emit = true) {
			this.sizeSelected = -1;
			this.onSizeInput(this.sizeSelected, false);

			if (this.heightSelected === -1) {
				Vue.delete(this.value, 'height');
				Vue.delete(this.value, 'heightDescription');
			} else {
				const { name, description } = this.choices[this.typeSelected].heights[this.heightSelected];
				Vue.set(this.value, 'height', name);
				Vue.set(this.value, 'heightDescription', description);
			}

			if (emit) {
				this.$emit('input', this.value);
			}
		},
		onSizeInput(value, emit = true) {
			this.gablePorchSelected = -1;
			this.onGablePorchInput(this.gablePorchSelected, false);

			this.sidePorchSelected = -1;
			this.onSidePorchInput(this.sidePorchSelected, false);

			if (this.sizeSelected === -1) {
				Vue.delete(this.value, 'gableSize');
				Vue.delete(this.value, 'sideWallLength');
				Vue.delete(this.value, 'price');
			} else {
				const { gableSize, sideWallLength, price } = this.choices[this.typeSelected].heights[this.heightSelected].sizes[this.sizeSelected];
				Vue.set(this.value, 'gableSize', gableSize);
				Vue.set(this.value, 'sideWallLength', sideWallLength);
				Vue.set(this.value, 'price', price);
			}

			if (emit) {
				this.$emit('input', this.value);
			}
		},
		onGablePorchInput(value, emit = true) {
			if (this.gablePorchSelected === -1) {
				Vue.delete(this.value, 'gablePorch');
				Vue.delete(this.value, 'gablePorchPrice');
			} else {
				const { gableSize } = this.choices[this.typeSelected].heights[this.heightSelected].sizes[this.sizeSelected];
				const { name, prices } = this.gabelPorchChoices[this.gablePorchSelected];
				Vue.set(this.value, 'gablePorch', name);
				Vue.set(this.value, 'gablePorchPrice', prices[gableSize]);
			}

			if (emit) {
				this.$emit('input', this.value);
			}
		},
		onSidePorchInput(value, emit = true) {
			if (this.sidePorchSelected === -1) {
				Vue.delete(this.value, 'sidePorch');
				Vue.delete(this.value, 'sidePorchPrice');
			} else {
				const { sideWallLength } = this.choices[this.typeSelected].heights[this.heightSelected].sizes[this.sizeSelected];
				const { name, prices } = this.sidePorchChoices[this.sidePorchSelected];
				Vue.set(this.value, 'sidePorch', name);
				Vue.set(this.value, 'sidePorchPrice', prices[sideWallLength]);
			}

			if (emit) {
				this.$emit('input', this.value);
			}
		},
	},
	template: `
		<div v-bind:id="id">
			<b-form-group label="Shed">
				<template v-for="({ name, description }, index) in choices">
					<b-form-radio
						class="button-like"
						size="lg"
						v-bind:name="id + '_type_input'"
						v-bind:value="index"
						v-on:change="onTypeChange"
						v-model="typeSelected"
					>
						{{name}}
						<div
							class="small text-muted"
							v-if="description"
						>
							{{description}}
						</div>
					</b-form-radio>
				</template>
			</b-form-group>

			<template v-if="typeSelected !== -1">
				<b-form-group label="Height">
					<template v-for="({ name, description }, index) in choices[typeSelected].heights">
						<b-form-radio
							class="button-like"
							size="lg"
							v-bind:name="id + '_height_input'"
							v-bind:value="index"
							v-on:change="onHeightChange"
							v-model="heightSelected"
						>
							{{name}}
							<div
								class="small text-muted"
								v-if="description"
							>
								{{description}}
							</div>
						</b-form-radio>
					</template>
				</b-form-group>

				<template v-if="heightSelected !== -1">
					<b-form-group label="Size">
						<b-form-select
							size="lg"
							v-bind:id="id + '_size_input'"
							v-bind:options="sizeOptions"
							v-on:input="onSizeInput"
							v-model="sizeSelected"
						></b-form-select>
					</b-form-group>

					<template v-if="sizeSelected !== -1">
						<b-form-group label="Gable View Overhang and Porch">
							<b-form-select
								size="lg"
								v-bind:id="id + '_gabelporch_input'"
								v-bind:options="gabelPorchOptions"
								v-on:input="onGablePorchInput"
								v-model="gablePorchSelected"
							></b-form-select>
						</b-form-group>

						<b-form-group label="Side View Overhang and Porch">
							<b-form-select
								size="lg"
								v-bind:id="id + '_sideporch_input'"
								v-bind:options="sidePorchOptions"
								v-on:input="onSidePorchInput"
								v-model="sidePorchSelected"
							></b-form-select>
						</b-form-group>
					</template>
				</template>
			</template>
		</div>
	`
};


