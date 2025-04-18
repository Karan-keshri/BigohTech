// DOM Manipulation & Event Listeners

const changeTextButton = document.getElementById('changeTextButton');
const greetingElement = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const displayNameElement = document.getElementById('displayName');
const animatedBox = document.getElementById('animatedBox');

// Event Listener for Changing Text
changeTextButton.addEventListener('click', function () {
  greetingElement.innerText = 'Hello, from DOM Manipulation !';
  greetingElement.classList.add('highlight');
  setTimeout(() => {
    greetingElement.classList.remove('highlight');
  }, 2000);
});

// Event Listener for Animations (move the box)
animatedBox.addEventListener('click', function () {
  animatedBox.style.transform = 'translateX(200px)';
  animatedBox.style.backgroundColor = 'red';
  setTimeout(() => {
    animatedBox.style.transform = 'translateX(0)';
    animatedBox.style.backgroundColor = 'blue';
  }, 1000);
});

// Event Listener for Name Submission
submitButton.addEventListener('click', function () {
  const name = nameInput.value;
  if (name) {
    displayNameElement.innerText = `Hello, ${name}!`;
    displayNameElement.classList.remove('hidden');
  } else {
    displayNameElement.innerText = 'Please enter your name.';
    displayNameElement.classList.remove('hidden');
  }
});

