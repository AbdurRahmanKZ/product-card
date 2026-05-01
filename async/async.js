const containerUser = document.querySelector(".catalog");
const userTemplate = document.querySelector("#users-catalog");

function renderUsers(users) {
  containerUser.innerHTML = "";
  users.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.
  });
} 













const status = document.querySelector(".status");

async function loadUsers() {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    const users = JSON.parse(savedUsers);

    setTimeout(() => {
      status.textContent = "Данные получены из localStorage";
      console.log("взяли из localStorage", users);
    }, 3000);
  } else {
    const response = await fetch("./users.json");
    const users = await response.json();
    
    setTimeout(() => {
      localStorage.setItem("users", JSON.stringify(users));
      status.textContent = "Данные загружены в localStorage";
      console.log(users);
    }, 3000);
  }
}

loadUsers();