// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) { return false }; // if shift is outside of parameters return false
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // create a alphabet variable
    const result = [];  // create a result array variable
    input = input.toLowerCase().split('');  // take input and make it lower case and split it into an array
    
    if (encode === true) { // if enocde === true 
      input.forEach((char, index) => { 	// loop through your input
        if (alphabet.includes(char)) { 	// make sure it is included in the alphabet variable else its a space or something
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newIndex = index + shift; 	// find its index add the shift
              if( newIndex < 0) { newIndex = newIndex + 26}; 	// if the shift is above or below 26 add 26 or minus 26 to get to the other end of the array
              if( newIndex > 25) { newIndex = newIndex - 26};
              newChar = alphabet[newIndex];
              result.push(newChar);
            }
          })
        } else {
          result.push(char); 	// push the new alphabet new index into tht result
        }
      });
    } else {
      input.forEach((char, index) => { 	// same as above but change the shift 
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newIndex = index - shift;
              if( newIndex < 0) { newIndex = newIndex + 26};
              if( newIndex > 25) { newIndex = newIndex - 26};
              newChar = alphabet[newIndex];
              result.push(newChar);
            }
          })
        } else {
          result.push(char);
        }
      });
    }
    return result.join(''); //return the array joined into a string
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
