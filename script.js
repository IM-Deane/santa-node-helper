const fs = require("fs");

/*
    1. Get the instructions from the file
    2. Then you need to determine which floor santa ended up on.
    Note: '(' = up one floor, ')' = down one floor

    3. Once I have retrieved the file and converted the it to a string, 
       I should create a counter for each character type.
    4. Next, I should create a search condition for each character
       using a RegExp.
    5. After that, I should call a search function on the string and count each instance of the characters.
    6. Finally, I should add the counters together. The resulting number is the floor Santa ended on.

*/

// My solution (checked and verified by the site):
function question1() {
	fs.readFile("./santas-instructions.txt", (err, data) => {
		if (err) throw err;
		const resultString = data.toString();
		// Search string for specified character and count matching
		// entries
		const upCount = resultString.match(/\(/g).length;
		const downCount = resultString.match(/\)/g).length;
		const finalFloor = upCount - downCount;

		// Create a text file with the calculated answer.
		fs.writeFile(
			"./answer.md",
			`Santa ended up on floor **${finalFloor}**.`,
			(err) => err && console.log(err)
		);
	});
}

// Question2
function question2() {
	fs.readFile("./santas-instructions.txt", (err, data) => {
		if (err) throw err;

		const directions = data.toString();
		const directionsArray = directions.split("");
		let accumulator = 0;
		let counter = 0;

		const answer = directionsArray.some((currentItem) => {
			if (currentItem === "(") {
				accumulator += 1;
			} else if (currentItem === ")") {
				accumulator -= 1;
			}
			counter++;
			return accumulator < 0;
		});

		fs.appendFile(
			"./answer.md",
			`\nSanta's position was: **${counter}**.`,
			(err) => err && console.log(err)
		);
	});
}

question1();
question2();
