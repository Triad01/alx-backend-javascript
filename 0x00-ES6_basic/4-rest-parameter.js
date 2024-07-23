/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function returnHowManyArguments(...args) {
	let total = 0
	let num;
	for (num in args){
		total += 1
	}

	return total
}
