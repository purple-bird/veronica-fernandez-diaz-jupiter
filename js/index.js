// Create footer element:
const theFooter = document.createElement("FOOTER");
theFooter.className = "footer";
theFooter.setAttribute("id", "the-footer");
document.body.appendChild(theFooter);

// Get current year:
const today = new Date();
const thisYear = today.getFullYear();

// Place and create copyright text:
const footer = document.querySelector("footer");
const copyright = document.createElement("P");
const copyrightText = `Veronica Fernandez-Diaz ${thisYear}`;
copyright.textContent = copyrightText;

footer.appendChild(copyright);

// Add to Skills Section:
const skills = ["HTML", "CSS", "Javascript", "Github"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector("#skills > ul");

for (let skillItem = 0; skillItem < skills.length; skillItem++) {
  const skill = document.createElement("LI");
  skill.innerText = skills[skillItem];
  skillsList.appendChild(skill);
}

// Handle message form submit:
const messageForms = document.getElementsByName("leave_message");
const messageForm = messageForms[0];

messageForm.addEventListener("submit", function (event) {
  // Prevent refresh behavior:
  event.preventDefault();
  // Create variables to get values entered in form:
  const myForm = event.currentTarget;
  const userName = myForm.usersName.value;
  const userEmail = myForm.usersEmail.value;
  const message = myForm.usersMessage.value;

  console.log(userName, userEmail, message);
  // Display messages in list:
  const messageSection = document.getElementById("messages");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  console.log(messageList);
  const newMessage = document.createElement("LI");
  console.log(newMessage);
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}:</a>
      <span>${message}</span>;
      `;
  // Create remove button:
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.appendChild(newMessage);
  removeButton.addEventListener("click", function (event) {
    const entry = event.target.parentNode;
    entry.remove();
  });

  // Place new messages list in message list
  messageList.appendChild(newMessage);

  //Place remove button in new message
  newMessage.appendChild(removeButton);

  // To clear form after submitting:
  messageForm.reset();
});

// Create fetch for my Github:
fetch("https://api.github.com/users/purple-bird/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })

  // Handle JSON data:
  .then((repositories) => {
    console.log("These are the repositories:", repositories);

    // To display repositories in list
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.getElementsByTagName("UL");

    for (
      let projectItem = 0;
      projectItem < repositories.length;
      projectItem++
    ) {
      const project = document.createElement("LI");
      project.innerText = repositories[projectItem].name;
      projectList[0].appendChild(project);
    }
  })

  // Handle errors:
  .catch((error) => {
    console.error("An error occured:", error);
  });
