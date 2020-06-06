'use strict';

const STORE = [
  {
    question: 'In which part of the body would you find papillae?',
    a: 'the tongue',
    b: 'the skin',
    c: 'hair',
    d: 'eyes',
    answer: 'the tongue'
  },
  {
    question: 'Borborygmus is the medical term for what bodily function or condition?',
    a: 'production of ear wax',
    b: 'stomach rumbles',
    c: 'heartburn',
    d: 'excessive sneezing',
    answer: 'stomach rumbles'
  },
  {
    question: 'The human eye can distinguish how many different colors?',
    a: '100,000',
    b: '1 million',
    c: '10 million',
    d: '100 million',
    answer: '10 million'
  },
  {
    question: 'How long usually is the small intestine?',
    a: '10 inches',
    b: '10 feet',
    c: '10 yards',
    d: '10 centimeters',
    answer: '10 feet'
  },
  {
    question: 'What is the body\'s second largest organ after the skin?',
    a: 'stomach',
    b: 'lungs',
    c: 'liver',
    d: 'brain',
    answer: 'liver'
  },
  {
    question: 'In which part of the body is the Occipital bone?',
    a: 'head',
    b: 'spine',
    c: 'hand',
    d: 'foot',
    answer: 'head'
  }
];

// COUNTER OF THE APP
const counter = {
  index: 0,
  score: 0,
  state: 'off',
};



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates


// create welcome page function
function generateWelcomeHTML() {
  return `<header class='header'>
  <h2>How Much Do You Know About Your Bod?</h2>
  <div>
  <button class='btn start-button'>Brain Punch!</button>
  </div>
</header>`;
}


// create question page function
function generateQuestionHTML(question, a, b, c, d) {
  return `<form>
    <legend>${question}</legend>
    <label for="a"><input type='radio' name='answer' value='${a}' required>${a}</label>
    <label for="b"><input type='radio' name='answer' value='${b}' required>${b}</label>
    <label for="c"><input type='radio' name='answer' value='${c}' required>${c}</label>
    <label for="d"><input type='radio' name='answer' value='${d}' required>${d}</label>
    <div>
    <button class='btn submit-button'>Cannonball!</button>
    </div>
</form>`;
}


// current score and current question function
function generateCounterHTML() {
  return `<div class='counter-box'>
  <p>Question: ${counter.index + 1} of 6</p>
  <p>Your Score: ${counter.score} of 6</p>
</div>`;
}


// generates correct answer page
function generateCorrectHTML() {
  return `<div>
  <h3>Yay! You got it!</h3>
  <button class='btn next-button'>Onward!</button>
</div>`;
}


// generates incorrect answer page
function generateIncorrectHTML() {
  return `<div>
  <h3>Oops, that's wrong.</h3>
  <p>The correct answer is ${STORE[counter.index].answer}.</p>
  <button class='btn next-button'>Onward!</button>
</div>`;
}


// generates result page based on number of correct answers
function generateResultsHTML() {
  let message = '';
  
  if (counter.score >= 5) {
    message = 'You know your bod!';
  } else if (counter.score >= 3) {
    message = 'You better study your bod.';
  } else {
    message = 'Are you even a human?';
  }

  return `<div>
  <h2>You got ${counter.score} out of 6 right!</h2>
  <p>${message}</p>
  <button class='btn reset-button'>Another Go Around?</button>
</div>`;
}



/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

// makes the welcome page through generateWelcome function
function renderWelcome() {
  const html = generateWelcomeHTML();
  $('.main').html(html);
}


// randomly selects new question through generateQuestion function
function renderQuestion() {
  const question = STORE[counter.index].question,
    a = STORE[counter.index].a,
    b = STORE[counter.index].b,
    c = STORE[counter.index].c,
    d = STORE[counter.index].d,

    html =generateQuestionHTML(question, a, b, c, d);
  // console.log(STORE[counter.index]);
  $('.main').html(html);
}


// updates number of correct questions through generateCorrect function
function renderCorrect() {
  const html = generateCorrectHTML();
  $('.main').html(html);
}


// updates number of incorrect questions through generateIncorrect function
function renderIncorrect() {
  const html = generateIncorrectHTML();
  $('.main').html(html);
}

// updates running count of correct and incorrect questions
function renderCounter() {
  const html = generateCounterHTML();
  if (counter.state === 'on') {
    $('.state').html(html);
  } else {
    $('.state').empty(html);
  }
}


// create results based on the generateResults function
function renderResults() {
  const html = generateResultsHTML();
  $('.main').html(html);
}



/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

// handle click on start button and fire renderQuestion function... renderState
function handleStart() {
  $('.main').on('click', '.start-button', () => {
    renderQuestion();
    counter.state = 'on';
    renderCounter();
  });
}


// handle submit event, if input answer is true, add 1 to score and renderCorrect
// function. else renderIncorrect... renderState
function handleSubmit() {
  $('main').submit('.submit-button', (event) => {
    event.preventDefault();
    if ($('input[name="answer"]:checked').val() === STORE[counter.index].answer) {
      counter.score++;
      renderCorrect();
    } else {
      renderIncorrect();
    }
    renderCounter();
  });
}


// handle whether to display end results or next page, while adding to index
function handleNext() {
  $('.main').on('click', '.next-button', () => {
    if (counter.index >= 5) {
      renderResults();
      counter.index = 0;
      counter.score = 0;
      counter.state = 'off';
    } else {
      counter.index++;
      renderQuestion();
    }
    renderCounter();
  });
}


// on click of Another Go Around button fire generateWelcome function
// reset counter
function handleNewQuiz() {
  $('.main').on('click', '.reset-button', () => {
    renderWelcome();
  });
  // counter.state === 'off';
  renderWelcome();
}


function handleQuizApp() {
  renderWelcome();
  renderQuestion();
  renderCorrect();
  renderIncorrect();
  renderCounter();
  renderResults();
  handleStart();
  handleSubmit();
  handleNext();
  handleNewQuiz();
}

$(handleQuizApp);