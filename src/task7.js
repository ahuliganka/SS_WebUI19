let getFibonacciArrayByLength = object1 => {
  const ArrayByLength = [1, 1];

  for (let i = 2; i < object1.length; i++) {
    ArrayByLength[i] = ArrayByLength[i - 1] + ArrayByLength[i - 2];
  }

  return ArrayByLength;
}

let getFibonacciArrayByRange = object2 => {
  const ArrayByRange = [1, 1];
  let j = 1;
  let value;

  do {
    j++;
    value = ArrayByRange[j - 1] + ArrayByRange[j - 2];

    if ( value <= object2.max ) {
      ArrayByRange[j] = value;
    }

  } while ( ArrayByRange[j] <= object2.max );
 
  let arr = ArrayByRange.filter( item => item >= object2.min );
  return arr;
}

let chooseFibonacciFunction = object => {
  if ( !isParameter(object) ) {
    return '{status: ‘failed’,' +
    ' reason: ‘Parameter did not pass to the function ' + chooseFibonacciFunction.name + '\'}';
  }

  if ( object.length ) {
    return getFibonacciArrayByLength(object);
  }
  
  if ( "min" in object && "max" in object ) {
    return getFibonacciArrayByRange(object);
  }
  
  return 'The object does not contain any suitable methods'; 
}