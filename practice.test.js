const sum = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

//capitalize();
const capitalize = require('./main');
test('returns the string name to Name', () => {
    expect(capitalize('name')).toBe('Name');
});

//
const reverseString = require('./main');
test('returns name to eman', () => {
    expect(reverseString('name')).toBe('eman');
});



//calculator