let displayTimeOrDate = () => {
  let date = new Date();
  let arrayTimeDateParams = [];

  arrayTimeDateParams[0] = date.getHours();
  arrayTimeDateParams[1] = date.getMinutes();
  arrayTimeDateParams[2] = date.getSeconds();

  arrayTimeDateParams[3] = date.getDate();
  arrayTimeDateParams[4] = date.getMonth() + 1;
  arrayTimeDateParams[5] = date.getFullYear() % 100;

  arrayTimeDateParams.forEach((item, i) => {
    if (item < 10) {
      arrayTimeDateParams[i] = '0' + item;
    }
  });

  return arrayTimeDateParams;
}
 
let displayShortTime = () => {
  let arrayTimeDate = displayTimeOrDate();
  return arrayTimeDate[0] + ':' + arrayTimeDate[1];
}

let displayFullTime = () => {
  let arrayTimeDate = displayTimeOrDate();
  return arrayTimeDate[0] + ':' + arrayTimeDate[1] + ':' + arrayTimeDate[2];
}

let displayEUdate = () => {
  let arrayTimeDate = displayTimeOrDate();
  return arrayTimeDate[4] + '/' + arrayTimeDate[3] + '/' + arrayTimeDate[5];
}

let displayUAdate = () => {
  let date = new Date();
  const dateUA = new Intl.DateTimeFormat('ua');  

  return dateUA.format(date);
}

