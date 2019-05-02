let extractPalindrome = num => {
  let strToNumber = +num;
  // console.log(typeof num);  

  if ( !isParameter(strToNumber) ) {
    return '{status: ‘' + Error.status + '’, reason: ‘' + Error.reason[0] + '"' + extractPalindrome.name + '"\'}';
  }

  if (typeof strToNumber !== "number") {
    return '{status: ‘' + Error.status + '’, reason: ‘' + Error.reason[1] + '\'}';
  }

  if ( strToNumber < 10 ) {
    return '{status: ‘' + Error.status + '’, reason: ‘' + Error.reason[2] + '\'}';
  }

  if (strToNumber !== Math.trunc(strToNumber)) {
    return '{status: ‘' + Error.status + '’, reason: ‘' + Error.reason[1] + '\'}';
  }
 
  return findPalindrome(strToNumber);
}

let findPalindrome = arg => {
  
  let argArray = String(arg).split('');
  let workingArray = [];
  let firstPartOfWorkingArray;
  let secondPartOfWorkingArray;  
  let result = 0;

  for (let i = 0; i < argArray.length; i++) {

    for (let j = i + 1; j < argArray.length; j++) {
      workingArray = argArray.slice(i, j + 1);

      if (workingArray.length % 2 === 0) {
        firstPartOfWorkingArray = workingArray.slice(0, workingArray.length / 2).join('');
        secondPartOfWorkingArray = workingArray.slice(workingArray.length / 2, workingArray.length).reverse().join('');
      } else {
        firstPartOfWorkingArray = workingArray.slice(0, (workingArray.length - 1) / 2).join('');
        secondPartOfWorkingArray = workingArray.slice((workingArray.length - 1) / 2 + 1,
           workingArray.length).reverse().join('');
      }

      result = (firstPartOfWorkingArray === secondPartOfWorkingArray) ? ( workingArray.join('') ) : 0;

      if (result !== 0) {
        return result;
      }
    }
  }

  return result;
}
