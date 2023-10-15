// Generating the output of the command
const renderOutput = (cmd) => {
  let outputText = commands[cmd];
  let outputDiv = document.createElement('div');
  outputDiv.setAttribute('id', 'output');
  outputDiv.innerHTML = outputText;
  document.body.append(outputDiv);
}

// Add new line for the terminal
const mkTerminal = () => {
  let newTermHTML = `
    <span id="prompt"><span class="cyan">~</span><span class="green">❯</span></span>
    <span><textarea id="command" rows="1" cols="22" autofocus></textarea></span>
  `;
  let newTermDiv = document.createElement('div');
  newTermDiv.setAttribute('name', 'terminal');
  newTermDiv.innerHTML = newTermHTML;
  document.body.append(newTermDiv);
}

// New terminal on load
onload = () => {
  mkTerminal();
}

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
  // Add projects command to output links to projects
}
const validCmds = Object.keys(commands);

// Keep command line focused when clicking anywhere
document.body.addEventListener('mouseup', () => {
  let cmdInput = document.getElementById('command');
  cmdInput.focus();
});

// On pressing Enter, don't go to new line, check command and output, if valid
document.body.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    let cmdInput = document.getElementById('command');
    let cmd = cmdInput.value;
    if (validCmds.includes(cmd)) {
      renderOutput(cmd);
    }
  // Disable the text area after command is entered
  cmdInput.setAttribute('readonly', 'readonly');
  // Remove ID
  cmdInput.removeAttribute('id');
  // Create a new terminal line with the same ID and select/focus it
  mkTerminal();
  cmdInput = document.getElementById('command');
  cmdInput.focus();
  }
});


