let getRangeMinLimit = value => {

  let initialNumber = Math.pow(10, value - 1);
  min = initialNumber;
  
  return min;
}

let getRangeMaxLimit = value => {

  let finiteNumber = '';
  
  for (let i = 0; i < value; i++) {
    finiteNumber += '9';
  }
  max = +finiteNumber;
  
  return max;
}