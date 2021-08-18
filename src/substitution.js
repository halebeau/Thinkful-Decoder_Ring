// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const encryptionKeys = {};

    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    //97 - 122  char codes a-z
    let charCodeCount = 97;

    for(let c = 0; c <= 25; c++){ //fill our object with normal alphabet keys paired with substitution keys
      if(Object.values(encryptionKeys).includes(alphabet[c])){ return false; } //if a value in encryptionKeys already exists (is alphabet[c])
      else{
        encryptionKeys[String.fromCharCode(charCodeCount)] = alphabet[c]; //set each key to a normal alphabet letter, value to a new alphabet char
        charCodeCount++;
      }
    }

    const buildEncryption = input.toLowerCase().split('');

    { //encode or decode here
		  return buildEncryption.map(letter => {  //iterate through each letter in our input
		  	for(let plainLetter in encryptionKeys){  //iterate through each object in encryptionKeys
		  		let substitutionLetter = encryptionKeys[plainLetter]; //set our keyvalue to substitutionLetter
          if(letter == " ") return " "; //keep spaces
		  		if(encode && letter == plainLetter) return substitutionLetter; //encode - if our input letter = key's string of plain letter, return the value of subsitutionLetter
          if(!encode && letter == substitutionLetter) return plainLetter; //decode - if our input letter equals a substitution letter, return the plain letter
      }
		}).join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
