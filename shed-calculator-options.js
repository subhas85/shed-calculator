/* global
	generateId toCurrency
*/

/* exported ShedCalculatorOptions */
const ShedCalculatorOptions = {
	props: {
		id: {
			type: String,
			default() {
				return generateId();
			}
		},
		value: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			choices: [
				{ option: 'Extra Door', price: 200, maxQuantity: 10 },
				{ option: 'Extra Window (w/flower box)', price: 100 },
				{ option: 'Extra Double Door', price: 250 },
				{ option: 'Opening Window staring at', price: 150 },
				{ option: 'Change Single Door to Dutch Door', price: 150 },
				{ option: '3\' Ramp - Single Door', price: 50 },
				{ option: '6\' Ramp - Double Door', price: 100 },
				{ option: 'Cinder Blocks if needed', price: 30 },
				{ option: '2 Tone stain accents', price: 200 },
				{ option: 'Bar Opening 3 ft. x 5 ft.', price: 300 },
				{ option: 'Extra Gable Vent', price: 40 },
				{ option: 'Sky light/ roof vent', price: 125 },
				{ option: 'Blue prints for sheds larger than 108 sq/ft', price: 250 },
				{ option: 'House wrap', price: 10, unit: 'foot' },
				{ option: '8\' Shelf', price: 40 },
				{ option: '10\' Shelf', price: 50 },
				{ option: '12\' Shelf', price: 60 },
				{ option: '14\' Shelf', price: 70 },
				{ option: '16\' Shelf', price: 80 },
				{ option: '8\' Work Bench', price: 150 },
				{ option: '10\' Work Bench', price: 200 },
				{ option: '12\' Work Bench', price: 250 },
				{ option: '14\' Work Bench', price: 300 },
				{ option: '16\' Work Bench', price: 350 },
				{ option: '8\' Dividing Wall', price: 600 },
				{ option: '10\' Dividing Wall', price: 700 },
				{ option: '12\' Dividing Wall', price: 800 },
				{ option: '14\' Dividing Wall', price: 900 },
				{ option: '16\' Dividing Wall', price: 1000 }
			],
			selected: -1
		};
	},
	computed: {
		options() {
			const options = this.choices.map(({ option, price, unit }, index) => {
				return {
					text: `${option} - ${price === 0 ? 'Free' : toCurrency(price).dollars}${unit ? ` per ${unit}` : ''}`,
					value: index
				};
			});

			return [
				{ text: 'Add...', value: -1 },
				...options
			];
		}
	},
	methods: {
		getQuantityOptions(index) {
			const { option, price, unit, maxQuantity = 10 } = this.value[index];

			const options = [];
			for (let quantity = 1; quantity <= maxQuantity; quantity++) {
				options.push({
					text: `${option} \u00D7 ${quantity}${unit ? ` ${unit}` : ''} - ${toCurrency(price * quantity).dollars}`,
					value: quantity
				});
			}

			return [
				{ text: 'Remove...', value: 0 },
				...options
			];
		},
		onAddInput() {
			if (this.selected !== -1) {
				const { option, price, unit, maxQuantity } = this.choices[this.selected];
				this.value.push({ option, price, unit, maxQuantity, quantity: 1 });

				this.$nextTick(() => {
					this.selected = -1;
					this.$refs.items[this.value.length - 1].focus();
					this.$emit('input', this.value);
				});
			}
		},
		onQuantityInput(index) {
			const { quantity } = this.value[index];
			if (quantity === 0) {
				this.$nextTick(() => {
					this.value.splice(index, 1);
					this.$emit('input', this.value);
				});
			} else {
				this.$emit('input', this.value);
			}
		}
	},
	template: `
		<b-form-group
			label="Options"
			v-bind:id="id"
		>
			<template v-for="(item, index) in value">
				<b-form-select
					class="mb-2"
					ref="items"
					size="lg"
					v-bind:options="getQuantityOptions(index)"
					v-on:input="onQuantityInput(index)"
					v-model="item.quantity"
				></b-form-select>
			</template>

			<b-form-select
				size="lg"
				v-bind:id="id + '_input'"
				v-bind:options="options"
				v-on:input="onAddInput"
				v-model="selected"
			></b-form-select>
		</b-form-group>
	`
};
