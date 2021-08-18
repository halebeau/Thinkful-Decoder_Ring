// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () =>{
    it('The input can include spaces, letters, and special characters when encoding', () =>{
        let actual = substitution('j*vvc dj*x*', 'pemo*nijbuhvygctfxrdz-swaq', false);
        expect(actual).to.equal('hello there');
    });

    it('Spaces are maintained throughout when decoding', () =>{
        let actual = substitution('j*vvc dj*x*', 'pemo*nijbuhvygctfxrdz-swaq', false);
        expect(actual).to.equal('hello there');
    });

    it('Spaces are maintained throughout when encoding', () =>{
        let actual = substitution('hi there', 'pemo*nijbuhvygctfxrdz-swaq');
        expect(actual).to.equal('jb dj*x*');
    });

    it('Capital letters are ignored', () =>{
        let actual = substitution('HI THERE', 'pemo*nijbuhvygctfxrdz-swaq');
        expect(actual).to.equal('jb dj*x*');
    });

    it('Alphabet parameter must be a string of exactly 26 characters, including special characters, and must all be unique', () =>{
        let actual = substitution('zoo', 'abcdefghijklmn@pqrstuvw^-*');
        expect(actual).to.equal('*@@');
    });

    it('Returns false if alphabet is longer or shorter than 26 characters', () =>{ //while encoding
        let highActual = substitution('zoo', 'abcdefghijklmn/pqrstuvw^-*+%#');
        let lowActual = substitution('zoo', 'abcdeuvw^-*+%#');
        expect(highActual).to.be.false;
        expect(lowActual).to.be.false;
    });

    it('Returns false if alphabet is null', () =>{
        let actual = substitution('zoo', '');
        expect(actual).to.be.false;
    });
});