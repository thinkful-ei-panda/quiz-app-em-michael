'use strict';

const questions = [
  {
    question: 'In which part of the body would you find papillae?',
    a: 'the tongue',
    b: 'the skin',
    c: 'hair',
    answer: 'the tongue'
  },
  {
    question: 'Borborygmus is the medical term for what bodily function or condition?',
    a: 'production of ear wax',
    b: 'stomach rumbles',
    c: 'heartburn',
    answer: 'stomach rumbles'
  },
  {
    question: 'The human eye can distinguish how many different colors?',
    a: '100,000',
    b: '1 million',
    c: '10 million',
    answer: '10 million'
  },
  {
    question: 'How long usually is the small intestine?',
    a: '10 inches',
    b: '10 feet',
    c: '10 yards',
    answer: '10 feet'
  },
  {
    question: 'What is the body\'s second largest organ after the skin?',
    a: 'stomach',
    b: 'lungs',
    c: 'liver',
    answer: 'liver'
  },
  {
    question: 'In which part of the body is the Occipital bone?',
    a: 'head',
    b: 'spine',
    c: 'hand',
    answer: 'head'
  }
];

// STATE OF THE APP
const store = {
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

function generateWelcome() {
  // create welcome page function
}


function generateQuestion() {
  // create question page function
}


function generateState() {
  // current score and current question function
}

function generateCorrect() {
  // generates correct answer page
}

function generateIncorrect() {
  // generates incorrect answer page
}

function generateResults() {
  // generates result page based on number of correct answers
}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderWelcome() {
  // makes the welcome page through generateWelcome function
}

function renderQuestion() {
  // randomly selects new question through generateQuestion function
}

function renderCorrect() {
  // updates number of correct questions through generateCorrect function
}

function renderIncorrect() {
  // updates number of incorrect questions through generateIncorrect function
}

function renderResults() {
  // create results based on the generateResults function
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStart() {
  // handle click on start button and fire renderQuestin function... renderState
}

function handleSubmit() {
  // handle submit event, if input answer is true, add 1 to score and renderCorrect
  // function. else renderIncorrect... renderState
}

function handleNext() {
  // handle whether to display end results or next page, while adding to index
}

function handleNewQuiz() {
  // on click of Another Go Around button fire generateWelcome function
}