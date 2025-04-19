function toCase(text) {
	 return text.toLowerCase() + '-' + text.toUpperCase();
}

const text = prompt("Enter text:");
alert(toCase(text));
