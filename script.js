// Generating the output of the command
const renderOutput = (cmd) => {
  if (cmd === 'clear') {
    Shell.clear();
    return
  }
  let outputText = Shell[cmd]();
  let outputDiv = document.createElement('div');
  outputDiv.setAttribute('id', 'output');
  outputDiv.innerHTML = outputText;
  document.body.append(outputDiv);
};

// Add new line for the terminal
const mkTerminal = () => {
  let newTermHTML = `
    <span id="prompt"><span class="cyan">~</span><span class="green">❯</span></span>
    <span><textarea id="command" rows="1" cols="22" maxlength="22" autofocus></textarea></span>
  `;
  let newTermDiv = document.createElement('div');
  newTermDiv.setAttribute('name', 'terminal');
  newTermDiv.innerHTML = newTermHTML;
  document.body.append(newTermDiv);
};

// New terminal on load
onload = () => {
  mkTerminal();
};

// Shell commands
const Shell = {
  invalid: () => {
    return `<p>Command not found.<br>Run 'help' to see the available commands</p>`
  },
  help: () => {
    return `
      <p>Available commands:</p>
      <ul style="list-style-type: none">
        <li>help -> print this dialog</li>
        <li>about -> print a short description of the developer</li>
        <li>projects -> print a list of the developer's projects</li>
        <li>clear -> clear the terminal</li>
    `
  },
  about: () => {
    return `
    <p>
      My name is Justin Tew, and I'm a Marine Corps veteran and a software developer.
      I am primarily proficient in Python, but can learn anything quickly. Some other areas I have gained experience in include
      JavaScript, Linux, scripting, DevOps, SQL, and networking. Other areas I intend to explore
      include C, C#, C++, Go, Rust, Docker, Kubernetes, and whatever else captures my interest and inspires me to learn.
    </p>`
  },
  projects: () => {
    return `
      <p>Some of the projects on <a href="https://github.com/j-tew">my Github</a> include:</p>
      <ul style="list-style-type: none">
        <li>-> Hangman game (my first Python project)</li>
        <li>-> Static site for a local bar using Django</li>
        <li>-> ISS Location web app that uses APIs</li>
        <li>-> Typing Test CLI</li>
      </ul>`
  },
  clear: () => {
    document.body.innerHTML = '';
  }
};
// List of shell commands
const validCmds = Object.keys(Shell);

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
    if (cmd === "invalid" || !(validCmds.includes(cmd))) {
      renderOutput("invalid");
    } else {
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


