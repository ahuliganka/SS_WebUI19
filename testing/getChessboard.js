let getChessboard = (length, height, symbol) => {

  if ( !isArgs(length, height, symbol) ) {
    return '{status: ‘' + Error.status + '’, reason: ‘' + Error.reason[3] + '"' + getChessboard.name + '"\'}';
  }

  if (typeof symbol !== "string") {
    return '{status: ‘' + Error.status + '’, \nreason: ‘' + Error.reason[4] + ' of the symbol\'}';
  }  

  if ( length < 0 || height < 0 ) {
    return '{status: ‘' + Error.status + '’, \nreason: ‘' + Error.reason[1] + ' of width or height\'}';
  }  
  
  let string = '';
  let stringRow = '';

  for  (let i = 0; i < length; i++) {
    stringRow = stringRow + symbol + ' ';
  }

  for (let j = 0; j < height; j++) {
    if (j % 2 !== 0) {
      string = string + ' ' + stringRow + '\n';
    } else {
      string = string + stringRow + '\n';
    }
  }

  return string;
}

