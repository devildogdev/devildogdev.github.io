const gh = "https://github.com/devildogdev";
const projects = [
  {
    name: "warlord",
    desc: "A spin on the 1984 game Drug Wars, written in Go",
  },
  {
    name: "logbk",
    desc: "A Go CLI that models the journal feature in Zed (will be a neovim plugin instead)",
  },
  {
    name: "crazy8_site",
    desc: "A Django app for a local bar that shut down before it was deployed",
  },
  {
    name: "genpass",
    desc: "A super simple password generator in Go",
  },
  {
    name: "ptlog",
    desc: "A web app that puts form input into a table, just to try HTMX",
  },
  {
    name: "prayer",
    desc: "A silly CLI that outputs the prayer from Boondock Saints",
  },
  {
    name: "curses-typing-test",
    desc: "A simple typing test CLI using ncurses (Python)",
  },
  {
    name: "iss_location",
    desc: "A Flask app that tracks the location of the ISS",
  },
];

onload = () => {
  for (const p of projects) {
    let url = `${gh}/${p.name}.git`;
    let item = document.createElement("li");
    item.innerHTML = `
      <p><span class="orange">- </span><a href="${url}"target="_blank">${p.desc}</a></p>
    `;
    document.getElementById("projects").append(item);
  }
};
