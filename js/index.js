const theFooter = document.createElement("FOOTER");
theFooter.className = "footer";
theFooter.setAttribute("id", "the-footer");
document.body.appendChild(theFooter);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("P");
const copyrightText = `Veronica Fernandez-Diaz ${thisYear}`;
copyright.innerHTML = copyrightText;

footer.appendChild(copyright);

const skills = ["HTML", "CSS", "Javascript", "Github"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector("#skills > ul");

for (let skillItem = 0; skillItem < skills.length; skillItem++) {
  const skill = document.createElement("LI");
  skill.innerText = skills[skillItem];
  skillsList.appendChild(skill);
}


const messageForms = document.getElementsByName("leave_message");
const messageForm = messageForms[0];

messageForm.addEventListener("submit", function(event) {
  
  event.preventDefault();

  const myForm = event.currentTarget;
  const userName = myForm.usersName.value;
  const userEmail = myForm.usersEmail.value;
  const message = myForm.usersMessage.value;

  console.log(userName, userEmail, message);

  const messageSection = document.getElementById("messages");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  console.log(messageList);
  const newMessage = document.createElement("LI");
  console.log(newMessage);
  newMessage.innerHTML = 
      `<a href="mailto:${userEmail}">${userName}:</a>
      <span>${message}</span>;
      `;
  
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.appendChild(newMessage);
  removeButton.addEventListener("click", function (event) {
    const entry = event.target.parentNode;
    entry.remove();
    
  })
  messageList.appendChild(newMessage);
  newMessage.appendChild(removeButton);

  messageForm.reset();
});
