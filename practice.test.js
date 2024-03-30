const {sum,capitalize,reverseString, calculator,analyzeArray, ceaserCipher} = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect((sum(1,2))).toBe(3);
});

//capitalize();

test('returns the string name to Name', () => {
    expect((capitalize('name'))).toBe('Name');
});

//reverse string

test('returns name to eman', () => {
    expect(reverseString('name')).toBe('eman');
});

//calculator

describe('calculator', () => {
    test('sums 1 + 2 to equal 3', () => {
        expect(calculator.add(1,2)).toBe(3)
    });
    test('subtracts 3 - 1 to equal 2', () => {
        expect(calculator.sub(3,1)).toBe(2)
    });
    test('divides 6 / 3 to equal 2', () => {
        expect(calculator.div(6,3)).toBe(2)
    });
    test('multiplies 1 * 2 to equal 2', () => {
        expect(calculator.mul(1,2)).toBe(2)
    });
});

//ceaserCipher
describe('ceaserCipher', () => {
    test('shifts each character by the shift factor', () => {
        expect(ceaserCipher('hello')).toBe('khoor')
    });
    test('wraps from z to a', () => {
        expect(ceaserCipher('z')).toBe('a');
    });
    test('keeps the same case', () => {
        expect(ceaserCipher('Hello')).toBe('Khoor');
    });
    test('maintains punctuation', () => {
        expect(ceaserCipher('hello?')).toBe('khoor?')
    })
});


//analyzeArray
describe('analyzeArray', () => {
    test('analyze the the items and return an object with average,min,max,length', () => {
        expect((analyzeArray([1,2,3,4]))).toEqual(
            {
            average: 2.5,
            min: 1,
            max: 4,
            length: 4}
        )
    });
    test('analyze the  items and return an object with average,min,max,length for negative values', () => {
        expect((analyzeArray([-2,-1,0,2]))).toEqual(
            {
            average: -0.25,
            min: -2,
            max: 2,
            length: 4}
        )
    });
});

