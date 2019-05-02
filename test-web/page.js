let clockCalendar = document.querySelector('clock-calendar >>> div');
clockCalendar.innerText = displayShortTime();

let timeFlag = true;
let dateFlag = true;

let switchTimeFormat = () => {
  if (timeFlag) {
    clockCalendar.innerText = displayFullTime();
  } else {
    clockCalendar.innerText = displayShortTime();
  }
  timeFlag = !timeFlag;
  dateFlag = true;
}

clockCalendar.addEventListener('click', switchTimeFormat);
 
// let switchDateFormat = (event) => {
//   event.preventDefault();
//   if (dateFlag) {
//     div.innerText = displayEUdate();
//   } else {
//     div.innerText = displayUAdate();
//   }
//   dateFlag = !dateFlag;
//   timeFlag = false;
// }

// div.addEventListener('contextmenu', switchDateFormat);

// let changeColorScheme = () => {
//     div.style.backgroundColor = 'black';
//     div.style.color = 'white';    
//   }

// div.addEventListener('mouseenter', changeColorScheme);

// let setToDefaultColorScheme = () => {
//     div.style.backgroundColor = '';
//     div.style.color = '';    
//   }

// div.addEventListener('mouseleave', setToDefaultColorScheme);
