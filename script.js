// Keep command line focused
document.body.addEventListener('mouseup', () => {
  input.focus();
});

// Accept a command
const input = document.getElementById('command');

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    console.log(input.value);
  }
});
