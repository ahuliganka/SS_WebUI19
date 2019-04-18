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

let isParameter = (arg) => {
  if ( typeof arg === 'undefined' ) {
    return false;
  }
  return true;
}

let isArgs = ( arg1, arg2, arg3 ) => {
  return (typeof arg1 !== 'undefined' ||
  typeof arg2 !== 'undefined' || typeof arg3 !== 'undefined') ? true : false;
}

// let isParameters = ( arg1, arg2 ) => {
//   if (typeof arg1 === 'undefined' || typeof arg2 === 'undefined') {
//     return false;
//   }
//   return true;
// }

