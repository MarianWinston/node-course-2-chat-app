const expect = require('expect');
const {isRealString} = require('./validation');
// import isrealstring 

// isrealstring 
    // shuold reject non-string values 
    // should reject string with only spaces 
    // should allow string with non-space caracters

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('shold allow string with non-space caracters', () => {
        let res = isRealString('  Marian  ');
        expect(res).toBe(true);
    });
});