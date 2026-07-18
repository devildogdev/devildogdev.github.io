const gh = "https://github.com/devildogdev";
const projects = [
  {
    name: "genpass",
    desc: "A super simple password generator in Go",
  },
  {
    name: "curses-typing-test",
    desc: "A simple typing test CLI using ncurses (Python)",
  },
  {
    name: "prayer",
    desc: "A silly CLI that outputs the prayer from Boondock Saints",
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
