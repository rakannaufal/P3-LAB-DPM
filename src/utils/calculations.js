export const calculateSum = (num1, num2) => {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    return number1 + number2;
  }
  return "Inputan salah";
};

export const calculateDifference = (num1, num2) => {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    return number1 - number2;
  }
  return "Inputan salah";
};

export const calculateProduct = (num1, num2) => {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    return number1 * number2;
  }
  return "Inputan salah";
};

export const calculateQuotient = (num1, num2) => {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (!isNaN(number1) && !isNaN(number2) && number2 !== 0) {
    return number1 / number2;
  }
  return "Inputan salah";
};
