var questions = [
"Name please",
"where are your papers?",
"you dont have any paper?"
]; 

var answers  = []; 

function ask(i) {
process.stdout.write(`\n \n \n ${questions[i]}`);
process.stdout.write(" > ");
	// body...
}

process.stdin.on('data',function(data) {
	//process.stdout.write('\n' + data.toString().trim() + '\n');
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask(answers.length);

	} else {
		process.exit();
	}
});
process.on('exit', function(){

	process.stdout.write("\n\n\n")
	process.stdout.write(`${answers[1]} ${answers[0]} is a lie! you dont have papers ${answers[0]} fuck you`)
	process.stdout.write("\n\n\n")
})

ask(0);

