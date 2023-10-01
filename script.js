const terminal = document.getElementById('terminal')
const input = document.getElementById('command');

terminal.addEventListener('mouseup', (e) => {
  input.focus();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log(input.value);
  }
});
