function mdc(num1, num2) {
    
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
  
   
    while (num2 !== 0) {
      const resto = num1 % num2;
      num1 = num2;
      num2 = resto;
    }
    return num1;
  }

module.exports = mdc;


