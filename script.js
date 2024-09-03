const gh = "https://github.com/devildogdev";
const projects = [
  {
    name: "warlord",
    desc: "A spin on the 1984 game Drug Wars, written in Go",
  },
  {
    name: "genpass",
    desc: "A simple password generator in Go",
  },
  {
    name: "ptlog",
    desc: "An htmx web app that puts form input into a table",
  },
  {
    name: "curses-typing-test",
    desc: "A typing test CLI",
  },
  {
    name: "iss_location",
    desc: "ISS Location Flask web app that uses an API",
  },
];

onload = () => {
  for (var i; i < projects.length; i++) {
    let p = projects[i];
    let url = `${gh}/${p.name}.git`;
    document.getElementById("projects").append(`
    <li>
        <span class="orange">-</span>
        <span class="syntax"> [</span>
        <span class="green">"${p.desc}"</span>
        <span class="syntax">](</span>
        <a href="${url}" target="_blank">${url}</a>
        <span class="syntax">)</span>
    </li>
    `);
  }
};
