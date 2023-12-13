function toCase(text) {
  // write your code here
	const lowercase = text.toLowerCase();
    const uppercase = text.toUpperCase();

    return `${lowercase}-${uppercase}`;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
