function sum(a,b) {
    return a + b;
}

const capitalize = (name) => {
    let string = name.charAt(0).toUpperCase() + name.slice(1, name.length) ;
    return string;
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const calculator = {
    add :  (a, b) => a + b,
    sub : (a, b) => a - b,
    mul : (a, b) => a * b,
    div : (a, b) => a / b,
};

const ceaserCipher = (string) => {
    var solved = '';
    for (let i = 0; i < string.length; i++) {
        var cipher = string[i].charCodeAt();
        if ( cipher >= 65 && cipher <= 87) {
            solved += string.fromCharCode(cipher + 3);
        } else if ( cipher == 90) {
            solved += string.fromCharCode(cipher - 26)
        } else {
            solved += string[i];
        }
    }
}

const analyzeArray = (array) => {
    let average = array.reduce((acc,val) => acc + val,0) / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length
    return {average,min,max,length}
}

module.exports = {sum,capitalize,reverseString,calculator,analyzeArray,ceaserCipher} ;