/* exported generateId */
function generateId(prefix = 'id') {
	if (generateId.counter == null) {
		generateId.counter = 0;
	}

	return `${prefix}${generateId.counter++}`;
}

/* exported toCurrency */
function toCurrency(num) {
	let [dollars, cents] = num.toFixed(2).split('.');
	dollars = `$${dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

	return {
		dollars,
		cents,
		full: `${dollars}.${cents}`
	};
}
