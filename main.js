function sum(a,b) {
    return a + b;
}
module.exports = sum;

const capitalize = (name) => {
    let string = name.charAt(0).toUpperCase() + name.slice(1, name.length) ;
    return string;
}
//console.log(capitalize("austine"));
module.exports = capitalize;

const reverseString = (string) => {
   let example = '';
   for (let i = 0; i < string.length-1; i--) {
    example +=string[i]
   }
   return string
}
module.exports = reverseString;

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
})();
  
calculator.add(3,5);// 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476  


const ceaserCipher = () => {

}

const analyzeArray = () => {
    
}

//module.exports = calculator;