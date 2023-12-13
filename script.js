function toCase(text) {
  // write your code here
	let lowerCaseStr=text.toLowercase();
	let upperCaseStr=text.toUpperCase();
	let result=lowerCaseStr+"-"+upperCaseStr;
	return result;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
