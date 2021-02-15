/* global
	toCurrency
*/

/* exported ShedCalculatorTotal */
const ShedCalculatorTotal = {
	props: {
		shed: {
			type: Object,
			default() {
				return {};
			}
		},
		options: {
			type: Array,
			default() {
				return [];
			}
		},
		delivery: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	computed: {
		total() {
			let shedTotal = this.shed.price ? this.shed.price : 0;
			if (this.shed.gablePorchPrice) {
				shedTotal += this.shed.gablePorchPrice;
			}
			if (this.shed.sidePorchPrice) {
				shedTotal += this.shed.sidePorchPrice;
			}

			const optionsTotal = this.options.reduce((acc, cur) => {
				const { price, quantity } = cur;
				return acc + (price * quantity);
			}, 0);

			const deliveryTotal = this.delivery && this.delivery.price != null
				? this.delivery.price : 0;

			return toCurrency(shedTotal + optionsTotal + deliveryTotal).dollars;
		}
	},
	template: `
		<div class="bg-light border p-3 rounded">
			Total
			<div class="display-4">
				{{total}}
			</div>
		</div>
	`
};


