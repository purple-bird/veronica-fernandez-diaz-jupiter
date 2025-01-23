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


const messageForm = document.getElementsByName("leave_message");

messageForm[0].addEventListener("submit", function(event) {
  
  event.preventDefault();

  const myForm = event.currentTarget;
  const userName = myForm.usersName.value;
  const userEmail = myForm.usersEmail.value;
  const message = myForm.usersMessage.value;

  console.log(userName, userEmail, message);
});
