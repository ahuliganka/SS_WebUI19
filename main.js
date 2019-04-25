// The set of errors' texts
let Error = {
  status: 'failed',
  reason: [
    'Parameter did not pass to the function ',
    'Please specify an integer number as a value',
    'Please specify an integer number less than 10',
    'No or not enough parameters passed to the function ',
    'Please specify a string value'
  ]
};


// The task section display according to the selected menu item

let task1MenuItems = document.querySelectorAll('.menu__item');
let tasksSections = document.querySelectorAll('section');
let lastChecked;

for (let i = 0; i < task1MenuItems.length; i++) {
  if (task1MenuItems[i].hasAttribute('checked')) {
    lastChecked = i;
    tasksSections[i].style.display = 'block';
  }
}

for (let i = 0; i < task1MenuItems.length; i++) {
  task1MenuItems[i].onclick = function setMenuItemChecked() {
    task1MenuItems[lastChecked].removeAttribute('checked');
    tasksSections[lastChecked].removeAttribute('style');
    task1MenuItems[i].setAttribute('checked', 'checked');

    if (task1MenuItems[i].hasAttribute('checked')) {
      tasksSections[i].style.display = 'block';
    }

    lastChecked = i;

    return task1MenuItems[i];
  }
}

// --------------------------- task1.js ---------------------------

let task1Fields = document.querySelectorAll('.task1 .task-form__field');
let task1Result = document.querySelector('.task1 .task__result');

task1Fields[3].onclick = function displayChessboard() {
  return task1Result.innerText = getChessboard(task1Fields[0].value, task1Fields[1].value, task1Fields[2].value);
}

// --------------------------- task2.js ---------------------------

let envelope1 = {
  id: 1,
  a: 3,
  b: 5
};

let envelope2 = {
  id: 2,
  c: 20,
  d: 40,
};

console.log('\nTask 2 \n' + compareEnvelopes(envelope1, envelope2));

// --------------------------- task4.js ---------------------------

console.log('\nTask 4 \n' + extractPalindrome(5395591));



// --------------------------- task7.js ---------------------------

let task7Choices = document.querySelectorAll('.task7 .task-form__choice');
let task7Forms = document.querySelectorAll('.task7 .task-form');
let lastItemChecked;

for (let i = 0; i < task7Choices.length; i++) {
  if (task7Choices[i].hasAttribute('checked')) {
    lastItemChecked = i;
    task7Forms[i].style.display = 'block';
  }
}

for (let i = 0; i < task7Choices.length; i++) {
  task7Choices[i].onclick = function setChoiceChecked() {
    task7Choices[lastItemChecked].removeAttribute('checked');
    task7Forms[lastItemChecked].removeAttribute('style');
    task7Choices[i].setAttribute('checked', 'checked');

    if (task7Choices[i].hasAttribute('checked')) {
      task7Forms[i].style.display = 'block';
      task7Result.innerText = '';  
    }

    lastItemChecked = i;

    return task7Choices[i];
  }
}

let task7Fields = document.querySelectorAll('.task7 .task-form__field');
let task7Result = document.querySelector('.task7 .task__result');
let context = {};

task7Fields[3].onclick = function displayRangeOfFibonacci() {
  if (task7Choices[0].hasAttribute('checked')) {
    delete context.length;
    context.min = task7Fields[0].value;
    context.max = task7Fields[1].value;
  } else {
    delete context.min;
    delete context.max;
    context.length = task7Fields[2].value;
  }

  return task7Result.innerText = chooseFibonacciFunction(context);
}


