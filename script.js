const skills = [
  "Ruby on Rails",
  "Ruby",
  "PostgreSQL",
  "React JS",
  "Redux TK",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Test-Driven Development",
  "Git and GitHub",
];

const projects = [
  {
    name: "BuddyBudget App",
    img: "images/BuddyBudget App.jpg",
    img_alt: "BuddyBudget thumbnail",
    desc: "BuddyBudget is a mobile design web application where you can manage your budget: you have a list of transactions associated with a category to see how much money you spend and on what.",
    tools: ["Ruby on Rails", "CSS3"],
    demo_link: "https://buddybudget.onrender.com",
    github_link: "https://github.com/Wineshuga/buddy_budget",
  },
  {
    name: "TellTheClouds App",
    img: "images/TellTheClouds App.jpg",
    img_alt: "TellTheClouds thumbnail",
    desc: "Tell the Clouds is a weather app designed to provide users with up-to-date weather information for various states in Nigeria.",
    tools: ["React.js", "Redux TK", "CSS3"],
    demo_link: "https://telltheclouds.onrender.com",
    github_link: "https://github.com/Wineshuga/tell_the_clouds",
  },
  {
    name: "Nassa App",
    img: "images/Nassa App.jpg",
    img_alt: "Nassa thumbnail",
    desc: "This web application is a space traveler app for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    tools: ["React.js", "Redux TK", "Bootstrap"],
    demo_link: "https://nassa.onrender.com",
    github_link: "https://github.com/Wineshuga/nassa",
  },
  {
    name: "ToDo List App",
    img: "images/ToDo list.PNG",
    img_alt: "ToDo thumbnail",
    desc: "ToDo List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It is a very simple yet powerful to-do list.",
    tools: ["React.js"],
    demo_link: "https://wineshuga.github.io/to-do-list/dist",
    github_link: "https://github.com/Wineshuga/to-do-list",
  },
];

const skillsDiv = document.querySelector(".skills");
const liElement = document.createElement("ul");
const liContent = skills.map((skill) => `<li>${skill}</li>`);
liElement.innerHTML = liContent.join("");
skillsDiv.appendChild(liElement);

// function to format tools array
function format(tools) {
  const length = tools.length;
  if (length === 1) {
    return tools[0];
  } else if (length === 2) {
    return `${tools[0]} and ${tools[1]}`;
  } else {
    const lastTool = tools[length - 1];
    const otherTools = tools.slice(0, length - 1).join(", ");
    return `${otherTools}, and ${lastTool}`;
  }
}

const projectsDiv = document.querySelector(".project-section");
const projectElement = document.createElement("div");
const projectContent = projects.map(
  (project) =>
    `<div class="projects">
    <div class="img-box">
      <img src="${project.img}" alt="${project.img_alt}" />
    </div>
    <div class="img-description">
      <h4>${project.name}</h4>
      <p>${project.desc}</p>
      <p>Built with ${format(project.tools)}.</p>
      <div class="project-btn-div">
        <a href=${project.demo_link} target="_blank"
          ><button class="btn project-btn">View Demo</button></a
        >
        <a
          href=${project.github_link}
          target="_blank"
          ><button class="btn project-btn">View Code</button></a
        >
      </div>
    </div>
  </div>
`
);
projectElement.innerHTML = projectContent.join("");
projectsDiv.appendChild(projectElement);
