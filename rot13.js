/*
ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a simple letter 
substitution cipher that replaces a letter with the 13th letter after it, in the alphabet. 
Only those letters which occur in the English alphabet are affected; numbers, symbols, 
whitespace, and all other characters are left unchanged. - wikipedia
*/

//Enciper plaintext
function rot13(input){
	var charArray = [];
	for(var i = 0; i < input.length; i++){
	 	 if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) < 78 || 
	 	 	input.charCodeAt(i) >= 97 && input.charCodeAt(i) < 110){
	 		 var a = String.fromCharCode(input.charCodeAt(i) + 13);
	 		 charArray.push(a);
	 	}
	 	else if(input.charCodeAt(i) >=78 && input.charCodeAt(i) < 91 ||
	 		    input.charCodeAt(i) >= 110 && input.charCodeAt(i) < 123){
	 		//reaches the end of the alphabet, therefore subtract 13
	 		var b = String.fromCharCode(input.charCodeAt(i) - 13);
	 		 charArray.push(b)	;
	 	}
	 	else{
	 		charArray.push(input[i]);
	 	}

	 }
	return charArray.join("");
}



//Decipher ciphertext
//Because there are 26 letters (2×13), ROT13 is its own inverse
function decRot13(input){
	return rot13(input);
}

//function calls
var plaintext = "I am very happy today!";
console.log(rot13(plaintext));
console.log(decRot13(rot13(plaintext)));

/*
Return the Unicode of the first character in a string (the Unicode value for "H"):
var str = "HELLO WORLD";
var n = str.charCodeAt(0);

Convert a Unicode number into a character:
var res = String.fromCharCode(65);

w3schools.com
Unicode table: https://www.rapidtables.com/code/text/unicode-characters.html
*/