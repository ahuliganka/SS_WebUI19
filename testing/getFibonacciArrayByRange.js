getFibonacciArrayByRange = (min, max) => {
  const ArrayByRange = [1, 1];
  let j = 1;
  let value;

  do {
    j++;
    value = ArrayByRange[j - 1] + ArrayByRange[j - 2];

    if ( value <= max ) {
      ArrayByRange[j] = value;
    }

  } while ( ArrayByRange[j] <= max );
 
  let arr = ArrayByRange.filter( item => item >= min );
  return arr;
}
