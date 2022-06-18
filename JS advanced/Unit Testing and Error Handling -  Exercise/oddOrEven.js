let expect = require('chai').expect;

function isOddOrEven (string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('is odd or even test', () => {
    it('returns undefined when given a number', () => {
        expect(isOddOrEven (2)).to.be.undefined;
    }) 
    it('returns undefined when given a array', () => {
        expect(isOddOrEven ([2,3,54])).to.be.undefined;
        
    }) 
    it('returns even when given the given string length is even', () => {
        expect(isOddOrEven ('fdsg')).to.equal('even');
    }) 
    it('returns odd when given the given string length is odd', () => {
        expect(isOddOrEven ('hello')).to.equal('odd');
    }) 
})
