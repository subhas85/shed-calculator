/* global
*/

/* exported ShedCalculatorMedia */
const ShedCalculatorMedia = {
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
		}
	},
	data() {
		return {
			medias: [
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/help-classic.png',
					type: 'Classic Style'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/classic-low.png',
					type: 'Classic Style',
					height: 'Low Gable'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/classic-med.png',
					type: 'Classic Style',
					height: 'Medium Gable'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/classic-high.png',
					type: 'Classic Style',
					height: 'High Gable'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/help-bb.png',
					type: 'Board and Batten'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/bb-med.png',
					type: 'Board and Batten',
					height: 'Medium Gable'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/bb-high.png',
					type: 'Board and Batten',
					height: 'High Gable'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/help-lean.png',
					type: 'Lean-to'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/lean-down.png',
					type: 'Lean-to',
					height: 'Lean Down'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/lean-up.png',
					type: 'Lean-to',
					height: 'Lean Up'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/2%20feet%20gable%20overhang.png',
					gablePorch: '2 Foot Gable Overhang'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/4%20foot%20gable%20porch.png',
					gablePorch: '4 Foot Gable Porch'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/6%20foot%20gable%20porch.png',
					gablePorch: '6 Foot Gable Porch'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/2%20foot%20side%20overhang.png',
					sidePorch: '2 Foot Side View Overhang'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/4%20foot%20side%20porch.png',
					sidePorch: '4 Foot Side View Porch'
				},
				{
					src: 'https://www.grandriversheds.com/sites/default/files/uploaded-media/6%20foot%20side%20porch.png',
					sidePorch: '6 Foot Side View Porch'
				}
			]
		};
	},
	computed: {
		display() {
			return this.medias.filter((media) => {
				return (media.type == null || this.shed.type == null || media.type === this.shed.type)
					&& (media.height == null || this.shed.height == null || media.height === this.shed.height)
					&& (media.gableSize == null || this.shed.gableSize == null || media.gableSize === this.shed.gableSize)
					&& (media.sideWallLength == null || this.shed.sideWallLength == null || media.sideWallLength === this.shed.sideWallLength)
					&& (media.gablePorch == null || this.shed.gablePorch == null || media.gablePorch === this.shed.gablePorch)
					&& (media.sidePorch == null || this.shed.sidePorch == null || media.sidePorch === this.shed.sidePorch);
			}).reduce((acc, cur) => {
				const { src } = cur;

				if (acc.length === 0) {
					acc.push([]);
				}

				let lastIndex = acc.length - 1;
				if (acc[lastIndex].length === 3) {
					acc.push([]);
					lastIndex++;
				}

				acc[lastIndex].push({ src });

				return acc;
			}, []);
		}
	},
	template: `
		<div>
			<b-form-row v-for="row in display">
				<b-col
					cols="4"
					v-for="({ src }) in row"
				>
					<b-img
						class="mb-3"
						fluid-grow
						thumbnail
						v-bind:src="src"
					></b-img>
				</b-col>
			</b-row>
		</div>
	`
};


