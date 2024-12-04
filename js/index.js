// Select the elements using its data attribute and store it in a variable
const addButton = document.querySelector('[data-js="add-button"]');
const removeButton = document.querySelector('[data-js="remove-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

const bodyElement = document.querySelector('[data-js="root"]');

// Add an event listener to the "Add" button to listen for "click" events
addButton.addEventListener('click', () => {
  // Add the "dark" class to the root element to apply a dark background (see css clas in style.css)
  bodyElement.classList.add('dark');
  console.log('Ich wurde ausgeführt');
});

removeButton.addEventListener('click', () => {
  bodyElement.classList.remove('dark');
});

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark');
});
