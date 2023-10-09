// Command list
const commands = {
  help: `These are the allowed commands:<br>
  &nbsp;&nbsp; help -> print this dialog<br>
  &nbsp;&nbsp; about -> print info about the developer<br>
  &nbsp;&nbsp; projects -> print links to the developer's projects<br>
  &nbsp;&nbsp; skills -> print some of what the developer is good at<br>`,
  about: `<p>My name is Justin Tew, and I'm a Marine Corps veteran and a software developer.
  I am primarily proficient in Python, but can learn anything quickly. Some other areas I have gained experience in include
  Javacript, Linux, scripting, DevOps, and networking.</p>`,
}

const validCmds = Object.keys(commands);
const cmdInput = document.getElementById('command');

onload = () => {
  cmdInput.value = ''
}

// Keep command line focused
document.body.addEventListener('mouseup', () => {
  cmdInput.focus();
});

// Accept a command
const cmdLines = document.getElementsByName('terminal');

cmdInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    let cmd = cmdInput.value;
    if (validCmds.includes(cmd)) {
      cmdInput.setAttribute('readonly', 'readonly');
      let outputText = commands[cmd];
      let outputDiv = document.createElement('div');
      outputDiv.setAttribute('id', 'output');
      outputDiv.innerHTML = outputText;
      document.body.append(outputDiv);
    }
    let newLine = cmdLines.item(0).cloneNode(true);
    document.body.append(newLine);
  }
});
