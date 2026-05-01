const containerUser = document.querySelector(".users-catalog");
const userTemplate = document.querySelector("#users-catalog");
const status = document.querySelector(".status");

function renderUsers(users) {
  containerUser.innerHTML = "";
  users.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.querySelector(".user-id").textContent = user.id
    userClone.querySelector(".user-name").textContent = user.name
    userClone.querySelector(".user-surname").textContent = user.surname
    userClone.querySelector(".user-email").textContent = user.email
    userClone.querySelector(".user-age").textContent = user.age
    containerUser.appendChild(userClone);
  });
} 

async function loadUsers() {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    const users1 = JSON.parse(savedUsers);

    setTimeout(() => {
      status.textContent = "";
      renderUsers(users1);
    }, 3000);
  } else {
    const response = await fetch("./users.json");
    const users1 = await response.json();
    
    setTimeout(() => {
      localStorage.setItem("users", JSON.stringify(users1));
      status.textContent = "";
      renderUsers(users1);
    }, 3000);
  }
}

loadUsers()