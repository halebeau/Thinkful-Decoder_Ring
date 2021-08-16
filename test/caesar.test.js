const expect = require('chai').expect;
const { caesar } = require('../src/caesar');

// 2) should return false if the shift amount is above 25
// 3) should return false if the shift amount is less than -25
describe('caesar', () => {
    it('Should return false if the shift amount is 0', () => {
        // 1) should return false if the shift amount is 0
        let message = "Beau codes";
        let actual = caesar(message, 0);

        expect(actual).to.be.false;
    });

    it('Should return false if shift is above 25, or below -25', () => {
        // 1) should return false if the shift amount is 0
        let message = "Beau codes";
        let highActual = caesar(message, 26);
        let lowActual = caesar(message, -26);

        expect(highActual).to.be.false;
        expect(lowActual).to.be.false;
    });

    it('Should return false if shift is above 25, or below -25', () => {
        // 1) should return false if the shift amount is 0
        let message = "Beau";
        let highActual = caesar(message, 26);
        let lowActual = caesar(message, -26);

        expect(highActual).to.be.false;
        expect(lowActual).to.be.false;
    });

    it('Should return an encoded message according to shift amount', () => {
        // 1) should return false if the shift amount is 0
        let message = "Beau";
        let actual = caesar(message, 3);

        expect(actual).to.equal('gdq');
    });

    it('Should return a decoded message according to shift amount', () => {
        // 1) should return false if the shift amount is 0
        let message = "gdq frghv";
        let actual = caesar(message, 3, false);

        expect(actual).to.equal('Beau codes');
    });

    it('Should maintain spaces in encoding if part of input', () => {
        // 1) should return false if the shift amount is 0
        let message = "Beau codes";
        let actual = caesar(message, 3);

        expect(actual).to.equal('gdq frghv');
    });

    it('Should wrap around the alphabet when reaching z', () => {
        let message = "zoo";
        let actual = caesar(message, 3);

        expect(actual).to.equal('crr');
    });

    it('Should ignore uppercase letters', () => {
        let message = "Zookeeper";
        let actual = caesar(message, 3);

        expect(actual).to.equal('crrnhhshu');
    });
});