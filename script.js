// Command list
const commands = {
  help: `These are the allowed commands:\n
    'help' -> print this dialog`,
  sudo: null
}

const validCmds = Object.keys(commands);
const cmdInput = document.getElementById('command');

// Keep command line focused
document.body.addEventListener('mouseup', () => {
  cmdInput.focus();
});

// Accept a command
const cmdLines = document.getElementsByName('terminal');

cmdInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    let cmd = cmdInput.value
    if (validCmds.includes(cmd)) {
      let result = document.createElement('div');
      result.innerHTML = `<pre>${commands[cmd]}</pre>`;
      cmdInput.setAttribute('value', '');
      document.body.append(result);
      console.log(cmdLines);
      let lastLine = cmdLines.item(length-1);
      let nextLine = document.createElement('div');
      nextLine.innerHTML = lastLine.outerHTML;
      document.body.append(nextLine);
    }
  }
});
