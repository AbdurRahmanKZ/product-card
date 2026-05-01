const containerUser = document.querySelector(".users-catalog");
const userTemplate = document.querySelector("#users-catalog");
const status = document.querySelector(".status");
const deleteAllCardsBtn = document.querySelector("#delete-all-button");
const deleteChosenCardBtn = document.querySelector("#delete-chosen-button");
const deleteChosenCardInput = document.querySelector("#delete-chosen-input");
const getAllCardsBtn = document.querySelector("#get-all-button");

function renderUsers(users) {
  containerUser.innerHTML = "";
  users.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.querySelector(".user-id").textContent = "index:" + user.id
    userClone.querySelector(".user-name").textContent = "name: " + user.name
    userClone.querySelector(".user-surname").textContent = "surname: " + user.surname
    userClone.querySelector(".user-email").textContent = "email: " + user.email
    userClone.querySelector(".user-age").textContent = "age: " + user.age + " years"
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

deleteAllCardsBtn.addEventListener("click", () => {
  //
});
deleteChosenCardBtn.addEventListener("click", () => {
  //
});
getAllCardsBtn.addEventListener("click", () => {
  //
});

loadUsers()