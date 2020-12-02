const fs = require('fs');
const readline = require('readline');

const input = fs.createReadStream("./input.txt");
const readlineInterface = readline.createInterface({
	input,
	crlfDelay: Infinity
});

function getRLInterface() {
	const input = fs.createReadStream("./input.txt");
	const readlineInterface = readline.createInterface({
		input,
		crlfDelay: Infinity
	});
	return readlineInterface;
}


async function adventDay2Part2() {

	let counter = 0;
	const rl = getRLInterface();
	for await (const line of rl) {
		const splitted = line.split(": ");
		const rule = splitted[0];
		const pw = splitted[1];
		const letter = rule.substr(-1)
		const splittedRule = rule.substr(0, rule.length - 2).split("-");
		const min = Number(splittedRule[0]);
		const max = Number(splittedRule[1]);
		console.log(min, max, pw[min - 1], pw[max - 1], pw[min - 1] == letter ^ pw[max - 1] == letter)
		if (pw[min - 1] == letter ^ pw[max - 1] == letter) {
			counter++;
		}
	}
	console.log(`Part2: Valid passwords: ${counter}`);
}

async function adventDay2Part1() {
	let counter = 0;
	const rl = getRLInterface();
	for await (const line of rl) {
		const splitted = line.split(": ");
		const rule = splitted[0];
		const pw = splitted[1];
		const letter = rule.substr(-1)
		const splittedRule = rule.substr(0, rule.length - 2).split("-");
		const min = Number(splittedRule[0]);
		const max = Number(splittedRule[1]);
		const regex = new RegExp(`${letter}`, 'g');
		const matches = pw.match(regex);
		if (matches && matches.length >= min && matches.length <= max) {
			counter++;
		}
	}
	console.log(`Part1: Valid passwords: ${counter}`);
}


adventDay2Part1();
adventDay2Part2();