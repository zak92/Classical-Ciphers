/*
Atbash Cipher
"The Atbash cipher is a particular type of monoalphabetic cipher formed by
taking the alphabet and mapping it to its reverse, so that the first letter becomes the last letter,
the second letter becomes the second to last letter, and so on." - WIKIPEDIA
*/
//encryption
function atbash(inputString){
	var ciphertext = [];
	var upperOrLowerCase;

	for(var i = 0; i < inputString.length; i++){
		//uppercase characters
		if(inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <= 90){
			upperOrLowerCase = 64;
		}
		//lowercase characters
		else if(inputString.charCodeAt(i) >= 97 && inputString.charCodeAt(i) <= 122){
			upperOrLowerCase = 96;
		}
		//special characters
		else {
			ciphertext.push(inputString[i]);
			continue; //go immediately to the next iteration
		}
			//find the unicode value of a character
			var plain = inputString.charCodeAt(i);
			var n = plain - upperOrLowerCase;
			var cipher = (upperOrLowerCase + 27) - n;
			//convert from unicode to letters of the aplhabet
			cipher = String.fromCharCode(cipher);

			ciphertext.push(cipher);
	}
	 return ciphertext.join("")
}


//decryption
function decryptAtbash(inputString){
	return atbash(inputString);
}


var inputString ="Good Morning, Sunshine!";
console.log(atbash(inputString));
console.log(decryptAtbash(atbash(inputString)))