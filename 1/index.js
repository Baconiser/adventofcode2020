const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const numbers = input.split(/\n/).map(Number);

for (var i = numbers.length - 1; i >= 0; i--) {
	const n1 = numbers[i];
	for (var j = numbers.length - 1; j >= 0; j--) {
		const n2 = numbers[j];
		if (n1 + n2 === 2020) {
			console.log(`Part1: ${n1 * n2}`);
		}
	};
};


for (var i = numbers.length - 1; i >= 0; i--) {
	const n1 = numbers[i];
	for (var j = numbers.length - 1; j >= 0; j--) {
		const n2 = numbers[j];
		for (var k = numbers.length - 1; k >= 0; k--) {
			const n3 = numbers[k];
			if (n1 + n2 + n3 === 2020) {
				console.log(`Part2: ${n1 * n2 * n3}`);
			}
		};
	}
}