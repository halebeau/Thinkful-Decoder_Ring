// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

    function caesar(input, shift, encode = true) {
    let encodedMsg = [];
    const message = input.toLowerCase().split('');
    for(let letter of message){ //encode each letter in message array
        if(shift > 25 || shift < -25 || shift === 0) return false; //shift cannot be 0 above 25, or below -25
        if(letter === ' '){ //a space in decoded message, add one to encoded message
        encodedMsg.push(' '); 
        } else if(letter === '.'){ //a period in decoded message, add one to encoded message
        encodedMsg.push('.');
        } 
        else{
        const letterNum = letter.charCodeAt(0); //grab code of the character at index 0
        let newLetterNum = (encode) ? letterNum + shift : letterNum - shift; // if encode is true, shift towards shift number, decoding we do the opposite
        if(newLetterNum > 122){ // 122 code is 'z'
            newLetterNum -= 26;
        }else if(newLetterNum < 97){ // 97 code is 'a'
            newLetterNum += 26;
        }
        const newLetter = String.fromCharCode(newLetterNum); //set our new letter to the string character from the character's code
        encodedMsg.push(newLetter);
        }
    }
    return encodedMsg.join(''); //join the array into complete string
    }
    return {
    caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
