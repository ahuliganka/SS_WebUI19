
let div = document.createElement('div');
div.classList.add('clock-calendar');
div.style.width = '900px';
div.style.height = '200px';
div.style.margin = '38vh auto';
div.style.fontSize = '200px';
div.style.textAlign = 'center';

div.style.fontFamily = '"DS-DIGIT", sans-serif';
document.body.insertBefore(div, document.body.firstChild);

div.innerText = displayShortTime();

let timeFlag = true;
let dateFlag = true;

let switchTimeFormat = () => {
  if (timeFlag) {
    div.innerText = displayFullTime();
  } else {
    div.innerText = displayShortTime();
  }
  timeFlag = !timeFlag;
  dateFlag = true;
}

div.addEventListener('click', switchTimeFormat);
 
let switchDateFormat = (event) => {
  event.preventDefault();
  if (dateFlag) {
    div.innerText = displayEUdate();
  } else {
    div.innerText = displayUAdate();
  }
  dateFlag = !dateFlag;
  timeFlag = false;
}

div.addEventListener('contextmenu', switchDateFormat);

let changeColorScheme = () => {
    div.style.backgroundColor = 'black';
    div.style.color = 'white';    
  }

div.addEventListener('mouseenter', changeColorScheme);

let setToDefaultColorScheme = () => {
    div.style.backgroundColor = '';
    div.style.color = '';    
  }

div.addEventListener('mouseleave', setToDefaultColorScheme);
