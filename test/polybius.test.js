// Write your tests here!
const expect = require('chai').expect;
const { polybius } = require('../src/polybius');

describe('polybius', () =>{
    it('Output is still a string when encoding', () => {
        let actual = polybius('Hello'); //encoding a message
        expect(actual).to.be.a('string');
    });

    it('The number of characters in the string (excluding spaces) should be even (when decoding)', () => {
        let actual = polybius('3251131343 2543241341', false); //decoding
        let expected = 'hello world';
        expect(actual).to.equal(expected);
    });

    it('Spaces maintained throughout when decoding', () => {
        let actual = polybius('3251131343 2543241341 4244 4234 2351', false); //decoding
        let expected = 'hello world i/jt i/js me';
        expect(actual).to.equal(expected);
    });

    it('Capital letters are ignored', () => {
        let actual = polybius('HI THERE'); //encoding
        let expected = '3242 4432512451';
        expect(actual).to.equal(expected);
    });

    it('Letters "I" and "J" share a space (as i/j) and the number (42)', () => {
        let actual = polybius('Johnny Jitters'); //encoding
        let expected = '424332333345 42424444512434';
        expect(actual).to.equal(expected);
    });

});