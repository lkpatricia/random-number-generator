
function queryUser() {
	alert("I can generate a random integer on a range defined by you.");   
	var lowerLimit = parseInt(prompt("What is the LOWEST integer of the range?"));  
	var upperLimit = parseInt(prompt("What is the HIGHEST integer of the range?"));   

	var numberRandom = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
	
	document.getElementById("numberRange").innerHTML = "Here is a really nice random integer on a range from " + lowerLimit + " to " + upperLimit + ":";
	document.getElementById("numberRandom").innerHTML = numberRandom;
}