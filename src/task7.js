let getRangeLimits = obj => {

  let initialNumber = Math.pow(10, obj.length - 1);
  let finiteNumber = '';
  
  for (let i = 0; i < obj.length; i++) {
    finiteNumber += '9';
  }
 
  obj.min = initialNumber;
  obj.max = +finiteNumber;

  return obj;
}

let getFibonacciArrayByRange = obj => {
  const ArrayByRange = [1, 1];
  let j = 1;
  let value;

  do {
    j++;
    value = ArrayByRange[j - 1] + ArrayByRange[j - 2];

    if ( value <= obj.max ) {
      ArrayByRange[j] = value;
    }

  } while ( ArrayByRange[j] <= obj.max );
 
  let arr = ArrayByRange.filter( item => item >= obj.min );
  return arr;
}

let chooseFibonacciFunction = object => {
  isUndefined(object);

  if ( "min" in object && "max" in object ) {
    return getFibonacciArrayByRange(object);
  }
    
  if ( object.length ) {
    getRangeLimits(object);
    return getFibonacciArrayByRange(object);
  }
  
  return 'The object does not contain any suitable properties'; 
}