const getUniqueDigitNumbers = (numbers) => {
     return numbers
          .map(String)
          .filter(numStr => {
               const digits = numStr.split('');
               return digits.length === new Set(digits).size;
          })
          .join(', ');
};

console.log(getUniqueDigitNumbers([123, 112, 456, 778, 987, 111]));
console.log(getUniqueDigitNumbers([12345, 54321, 11223, 67890]));
console.log(getUniqueDigitNumbers([11, 22, 33, 44, 55]));
