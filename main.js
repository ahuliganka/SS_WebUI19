// --------------------------- menu html---------------------------

let menu = `<input class="menu__item" id="tab1" type="radio" name="tabs" checked="checked" />
<label class="menu__item-field" for="tab1">Task 1</label>

<input class="menu__item" id="tab2" type="radio" name="tabs" />
<label class="menu__item-field" for="tab2">Task 2</label>

<input class="menu__item" id="tab3" type="radio" name="tabs" />
<label class="menu__item-field" for="tab3">Task 3</label>

<input class="menu__item" id="tab4" type="radio" name="tabs" />
<label class="menu__item-field" for="tab4">Task 4</label>

<input class="menu__item" id="tab5" type="radio" name="tabs" />
<label class="menu__item-field" for="tab5">Task 5</label>

<input class="menu__item" id="tab6" type="radio" name="tabs" />
<label class="menu__item-field" for="tab6">Task 6</label>

<input class="menu__item" id="tab7" type="radio" name="tabs" />
<label class="menu__item-field" for="tab7">Task 7</label>`;

let nav = document.createElement('nav');
nav.classList.add('menu');
nav.innerHTML = menu;
let main = document.querySelector('.tasks');
//let scripts = document.querySelector('script');
//main.appendChild(nav);
main.insertBefore(nav, main.firstChild);

// --------------------------- task1.js html---------------------------

let task1 = `<h1 class="task__heading">Task 1. Chessboard</h1>
<form class="task-form" action="#" method="post">
  <div class="task-form__container">
    <label class="task-form__field-name" for="width1">Width</label>
    <input class="task-form__field" type="number" id="width1" name="width1"
      placeholder="specify a number no more than 1000" required="required" />
  </div>
  <div class="task-form__container">
    <label class="task-form__field-name" for="height1">Height</label>
    <input class="task-form__field" type="number" id="height1" name="height1"
      placeholder="specify a number no more than 1000" required="required" />
  </div>
  <div class="task-form__container">
    <label class="task-form__field-name" for="width1">Separator</label>
    <input class="task-form__field" type="text" id="separator1" name="separator1" placeholder="specify a symbol"
      required="required" />
  </div>
  <input type="button" class="task-form__field btn" name="get_result" value="Get result" />
</form>
<pre class="task__result"></pre>`;

//document.querySelector(".tasks").innerHTML = html;

let section1 = document.createElement('section');
section1.classList.add('task', 'task1');
section1.innerHTML = task1;
main.insertBefore(section1, nav.nextSibling);

// --------------------------- task2.js html---------------------------

let task2 = `<h1 class="task__heading">Task 2. Envelopes</h1>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name label">Envelope 1:</label>
    <label class="task-form__field-name label">Envelope 2:</label>
  </div>
  <div class="task-form__container">
    <label class="task-form__field-name" for="a">a</label>
    <input class="task-form__field" type="number" id="a" name="a" placeholder="specify a number"
      required="required" />
    <label class="task-form__field-name" for="c">c</label>
    <input class="task-form__field" type="number" id="c" name="c" placeholder="specify a number"
      required="required" />
  </div>
  <div class="task-form__container">
    <label class="task-form__field-name" for="width1">b</label>
    <input class="task-form__field" type="number" id="b" name="b" placeholder="specify a number"
      required="required" />
    <label class="task-form__field-name" for="d">d</label>
    <input class="task-form__field" type="number" id="d" name="d" placeholder="specify a number"
      required="required" />
  </div>
  <input type="button" class="task-form__field btn" name="put_envelopes" value="Put envelopes" />
</form>
<pre class="task__result--small"></pre>`;

let section2 = document.createElement('section');
section2.classList.add('task', 'task2');
section2.innerHTML = task2;
main.insertBefore(section2, section1.nextSibling);

// --------------------------- task3.js html---------------------------

let task3 = `<h1 class="task__heading">Task 3. Sorting triangles</h1>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name" for="vertices">Vertices</label>
    <input class="task-form__field" type="number" id="vertices" name="vertices" placeholder="specify a number"
      required="required" />
  </div>
  <div class="task-form__container">
    <label class="task-form__field-name" for="a3">A</label>
    <input class="task-form__field" type="number" id="a3" name="a3" placeholder="specify a number"
      required="required" />
  </div>
  <div>
    <label class="task-form__field-name" for="b3">B</label>
    <input class="task-form__field" type="number" id="b" name="b3" placeholder="specify a number"
      required="required" />
  </div>
  <div>
    <label class="task-form__field-name" for="c3">C</label>
    <input class="task-form__field" type="number" id="c3" name="c3" placeholder="specify a number"
      required="required" />
  </div>
  <input type="button" class="task-form__field btn" name="add_triangle" value="Add triangle" />
  <input type="button" class="task-form__field btn" name="get_triangles" value="Get triangles" />
  <input type="button" class="task-form__field btn" name="sort_by_area" value="Sort by area" />
</form>
<pre class="task__result"></pre>`;

let section3 = document.createElement('section');
section3.classList.add('task', 'task3');
section3.innerHTML = task3;
main.insertBefore(section3, section2.nextSibling);

// --------------------------- task4.js html---------------------------

let task4 = `<h1 class="task__heading">Task 4. Palindrome</h1>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name" for="number4">Number</label>
    <input class="task-form__field" type="number" id="number4" name="number4" placeholder="specify a number"
      required="required" />
  </div>
  <input type="button" class="task-form__field btn" name="extract_the_palindrome"
    value="Extract the palindrome" />
</form>
<pre class="task__result--small"></pre>`;

let section4 = document.createElement('section');
section4.classList.add('task', 'task4');
section4.innerHTML = task4;
main.insertBefore(section4, section3.nextSibling);

// --------------------------- task5.js html---------------------------

let task5 = `<h1 class="task__heading">Task 5. Lucky tickets</h1>
<p class="task__description"><strong><em>Lucky tickets</em></strong> can be defined in two methods:</p>
<ol class="task__description-list">
  <li class="task__description-list-item">if the <strong>sum of the first three digits</strong> of the ticket number is equal to the <strong>sum of the last three ones</strong></li>
  <li class="task__description-list-item">if the <strong>sum of even digits</strong> of the ticket number is equal to the <strong>sum of odd ones</strong></li>
</ol>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name" for="min5">Min. range limit</label>
    <input class="task-form__field" type="number" id="min5" name="min5" placeholder="specify a 6-digit number"
      min="6" max="6" required="required" />
  </div>
  <div>
    <label class="task-form__field-name" for="max5">Max. range limit</label>
    <input class="task-form__field" type="number" id="max5" name="max5" placeholder="specify a 6-digit number"
      min="6" max="6" required="required" />
  </div>
  <input type="button" class="task-form__field btn" name="compare_methods" value="Compare methods" />
</form>
<pre class="task__result--small"></pre>`;

let section5 = document.createElement('section');
section5.classList.add('task', 'task5');
section5.innerHTML = task5;
main.insertBefore(section5, section4.nextSibling);

// --------------------------- task6.js html---------------------------

let task6 = `<h1 class="task__heading">Task 6. Numerical sequence</h1>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name" for="length6">Row length</label>
    <input class="task-form__field" type="number" id="length6" name="length6" placeholder="specify a number"
      required="required" />
  </div>
  <div class="task-form__container">
    <label class="task-form__field-name" for="min_square">Min. square</label>
    <input class="task-form__field" type="number" id="min_square" name="min_square" placeholder="specify a number"
      min="6" max="6" required="required" />
  </div>
  <input type="button" class="task-form__field btn" name="Get_result" value="Get result" />
</form>
<pre class="task__result"></pre>`;

let section6 = document.createElement('section');
section6.classList.add('task', 'task6');
section6.innerHTML = task6;
main.insertBefore(section6, section5.nextSibling);

// --------------------------- task7.js html---------------------------

let task7 = `<h1 class="task__heading">Task 7. Fibonacci numbers range</h1>
<div class="task-form__container">
  <input class="task-form__choice" id="var1" type="radio" name="choice7" checked="checked" />
  <label class="task-form__choice-name" for="var1">Range</label>      
  <input class="task-form__choice" id="var2" type="radio" name="choice7" />
  <label class="task-form__choice-name" for="var2">Length</label>
</div>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name" for="min7">Min</label>
    <input class="task-form__field" type="number" id="min7" name="min7" placeholder="specify a number" />
  </div>
  <div>
    <label class="task-form__field-name" for="max7">Max</label>
    <input class="task-form__field" type="number" id="max7" name="max7" placeholder="specify a number" />
  </div>
</form>
<form class="task-form" action="">
  <div class="task-form__container">
    <label class="task-form__field-name" for="length7">Length</label>
    <input class="task-form__field" type="number" id="length7" name="length7" placeholder="specify a number" />
  </div>
</form>
<input type="button" class="task-form__field btn" name="get_numbers" value="Get numbers" />      
<pre class="task__result"></pre>`;

let section7 = document.createElement('section');
section7.classList.add('task', 'task7');
section7.innerHTML = task7;
main.insertBefore(section7, section6.nextSibling);


// --------------------------- Menu items selection ---------------------------
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

let task4Fields = document.querySelectorAll('.task4 .task-form__field');
let task4Result = document.querySelector('.task4 .task__result--small');

task4Fields[1].onclick = function displayResultOfExtracting() {
  return task4Result.innerText = extractPalindrome(task4Fields[0].value);
}

//console.log('\nTask 4 \n' + extractPalindrome(5395591));


// --------------------------- task5.js ---------------------------

let task5Fields = document.querySelectorAll('.task5 .task-form__field');
let task5Result = document.querySelector('.task5 .task__result--small');

task5Fields[2].onclick = function displayResultsOfCountingMethods() {
  let context = {
    min: task5Fields[0].value,
    max: task5Fields[1].value
  }  
  return task5Result.innerText = findBestCountingMethodForMore(context);
}

// --------------------------- task6.js ---------------------------

//console.log('\nTask 6 \n' + findBestCountingMethodForMore('395591'));

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