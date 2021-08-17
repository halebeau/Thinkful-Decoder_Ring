// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    //create our polybius square collection
    const polybiusSquare = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };

    const message = input.toLowerCase().split(''); //our input -> individual char array
    const messageNoSpaces = message.filter(nums => nums != ' '); //our array  without spaces
    if(!encode){ //then we decode
      let decodeString = '';
      if(messageNoSpaces.length % 2 != 0) return false; //a copy of our array without spaces to check if there are an odd number of numbers
      for(let index = 0; index < message.length; index += 2){
        //[column][row] format
        if(message[index] === ' '){ //if theres a space in the input add it to our decodeString
          decodeString += ' ';
          index--; //reset index a space since our value was a space
        }else{ decodeString += polybiusSquare[message[index + 1]][message[index]]; } //decode
      }
      return decodeString;
    }else{ //else we encode
      const buildEncryption = [];
      for(let letter of message){ //for each letter we will find the key/value pair by:
        if(letter === ' '){ buildEncryption.push(' '); } //keep our spaces
        for(let c = 1; c < 6; c++){ //cycling each column
          for(let i = 1; i < 6; i++){ //cycling each row
            if(polybiusSquare[c][i].includes(letter)){
              buildEncryption.push(i);
              buildEncryption.push(c);
            } 
          }
        }
      }
      return buildEncryption.join('');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };