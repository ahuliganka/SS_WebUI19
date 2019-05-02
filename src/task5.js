let getTicketsRange = object => {
  let ticketsArray = [];
  let num = 0;

  for (let i = object.min; i <= object.max; i++) {
    ticketsArray[num] = i.toString();
    num++;
  }

  return ticketsArray;
}

let getNumberArraysFromString = array => {
  let numberArrays = [];
  for (let i = 0; i < array.length; i++) {
    numberArrays[i] = array[i].split('');
  }

  return numberArrays;
}

let applySimpleCountingMethodToTicket = arrayOfTickets => {
  let firstHalfOfAmount = 0;
  let secondHalfOfAmount = 0;
  let luckyTicketsArray = [];

  for (let i = 0; i < arrayOfTickets.length; i++) {
    arrayOfTickets[i].forEach((item, k) => { 
      if (arrayOfTickets[i].length === 6) {
        if (k < 3) {
          firstHalfOfAmount += +item;
        } else {
          secondHalfOfAmount += +item;
        }
      }

      if (arrayOfTickets[i].length < 6) {
        if (k < (arrayOfTickets[i].length - 3)) {
          firstHalfOfAmount += +item;
        } else {
          secondHalfOfAmount += +item;
        } 
      }      
    });

    if (firstHalfOfAmount === secondHalfOfAmount) {
      luckyTicketsArray.push(arrayOfTickets[i].join(''));
    }
    firstHalfOfAmount = 0;
    secondHalfOfAmount = 0;
  }

  return luckyTicketsArray.length;
}

let applyComplexCountingMethodToTicket = arrayOfTickets => {
  let evenAmount = 0;
  let oddAmount = 0;
  let luckyTicketsArray = [];

  for (let i = 0; i < arrayOfTickets.length; i++) {
   
    arrayOfTickets[i].forEach((item, k) => {
      if (item % 2 === 0) {
        evenAmount += +item;
      } else {
        oddAmount += +item;
      }
    });
    if (evenAmount === oddAmount) {
      luckyTicketsArray.push(arrayOfTickets[i].join(''));
    }
    evenAmount = 0;
    oddAmount = 0;
  }

  return luckyTicketsArray.length;
}

let findBestCountingMethodForMore = object => {
  let ticketsNumbersRange = getTicketsRange(object);
  let numberArrays = getNumberArraysFromString(ticketsNumbersRange);
  let resultOfSimpleCountingMethod = applySimpleCountingMethodToTicket(numberArrays);
  let resultOfComplexCountingMethod = applyComplexCountingMethodToTicket(numberArrays);
  let resultObject = {};

  if (resultOfSimpleCountingMethod > resultOfComplexCountingMethod) {
    resultObject.winningMethod = 1;
    resultObject.descrWinningMethod = ' (sum of halves) - ';
    resultObject.losingMethod = 2;
    resultObject.descrLosingMethod = ' (sum of odd and even) - ';
    resultObject.moreLuckyTicketsAmount = resultOfSimpleCountingMethod;
    resultObject.lessLuckyTicketsAmount = resultOfComplexCountingMethod;
    
  } else if (resultOfComplexCountingMethod > resultOfSimpleCountingMethod) {
    resultObject.winningMethod = 2;
    resultObject.descrWinningMethod = ' (sum of odd and even) - ';    
    resultObject.losingMethod = 1;
    resultObject.descrLosingMethod = ' (sum of halves) - ';    
    resultObject.moreLuckyTicketsAmount = resultOfComplexCountingMethod;
    resultObject.lessLuckyTicketsAmount = resultOfSimpleCountingMethod;

  } else {
    return 'Amount of the lucky tickets for both methods is equals: ' + resultOfSimpleCountingMethod;
  }

  return 'Winning method: ' + resultObject.winningMethod + resultObject.descrWinningMethod + resultObject.moreLuckyTicketsAmount +
  ' lucky tickets!\nLosing method: ' + resultObject.losingMethod + resultObject.descrLosingMethod + 'only ' +
   resultObject.lessLuckyTicketsAmount + ' lucky tickets';  
}