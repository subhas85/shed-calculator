/* global
	generateId
	ShedCalculatorDelivery ShedCalculatorMedia ShedCalculatorOptions ShedCalculatorShed ShedCalculatorTotal
*/

/* exported ShedCalculator */
const ShedCalculator = {
	props: {
		id: {
			type: String,
			default() {
				return generateId();
			}
		}
	},
	data() {
		return {
			shed: {},
			options: [],
			delivery: {}
		};
	},
	components: {
		'sc-shed': ShedCalculatorShed,
		'sc-options': ShedCalculatorOptions,
		'sc-delivery': ShedCalculatorDelivery,
		'sc-total': ShedCalculatorTotal,
		'sc-media': ShedCalculatorMedia
	},
	template: `
		<b-form
			class="my-3"
			v-bind:id="id"
		>
			<b-row>
				<b-col
					class="pt-3"
					cols="5"
sm="12"
md="6"
				>
					<sc-shed
						v-bind:id="id + '_shed'"
						v-model="shed"
					></sc-shed>

					<sc-options
						class="mt-5"
						v-bind:id="id + '_options'"
						v-model="options"
					></sc-options>

					<sc-delivery
						class="mt-5"
						v-bind:id="id + '_delivery'"
						v-model="delivery"
					></sc-delivery>

					<sc-total
						class="mt-5"
						v-bind:delivery="delivery"
						v-bind:options="options"
						v-bind:shed="shed"
					></sc-total>
				</b-col>

				<b-col sm="12" md="6">
					<div
						class="pt-3 sticky-top"
						style="max-height: 100vh; overflow: auto;"
					>
						<div class="container-fluid">
							<sc-media
								v-bind:shed="shed"
								v-bind:options="options"
							></sc-media>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-form>
	`
};


