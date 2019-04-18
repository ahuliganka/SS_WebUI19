let displayOfPositiveIntegers = (rowLength, minSquare) => {
  // if ( !isArgs(length, height, symbol) ) {
  //   return '{status: ‘failed’,' +
  //   ' reason: ‘No or not enough parameters passed to the function ' + getChessboard.name + '\'}';
  // }
  
  let row = '';

  for  (let i = 1; i < rowLength; i++ ) {
    if ( i*i >= minSquare ){
      row = row + i + ', ';

    } 
  }

  return row;
}