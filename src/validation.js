let isUndefined = arg => {
  if (arg === undefined) {
    return "Please enter an integer number less than 10";
  }

  return arg;
}

let isNumber = arg => {
  if (typeof arg !== "number") {
    return "Please enter an integer number as a value";
  }

  return arg;
}

let isPositive = (length, height) => {
  return ( length < 0 || height < 0 );
}

let isParameter = (arg) => {
  return (arg) ? arg : `{status: ‘failed’, \nreason: ‘Parameter did not pass to the function ` + chooseFibonacciFunction.name + `\'}`;
}

let isArgs = ( arg1, arg2, arg3 ) => {
  return (typeof arg1 !== 'undefined' ||
  typeof arg2 !== 'undefined' || typeof arg3 !== 'undefined');
}

let isParameters = ( arg1, arg2 ) => {
  return (typeof arg1 === 'undefined' || typeof arg2 === 'undefined');
}

