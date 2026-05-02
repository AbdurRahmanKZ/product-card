const containerUser = document.querySelector(".users-catalog");
const userTemplate = document.querySelector("#users-catalog");
const status = document.querySelector(".status");
const deleteAllCardsBtn = document.querySelector("#delete-all-button");
const deleteChosenCardBtn = document.querySelector("#delete-chosen-button");
const deleteChosenCardInput = document.querySelector("#delete-chosen-input");
const getAllCardsBtn = document.querySelector("#get-all-button");

let users

function renderUsers(users) {
  containerUser.innerHTML = "";
  if (!Array.isArray(users) || users.length === 0) {
    status.textContent = "нет данных";
    return;
  }
  users.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.querySelector(".user-id").textContent = "index:" + user.id
    userClone.querySelector(".user-name").textContent = "name: " + user.name
    userClone.querySelector(".user-surname").textContent = "surname: " + user.surname
    userClone.querySelector(".user-email").textContent = "email: " + user.email
    userClone.querySelector(".user-age").textContent = "age: " + user.age + " years"
    containerUser.appendChild(userClone);
  });
  status.textContent = ""
}

function loadAllCardsToVar() {
  const savedUsers = JSON.parse(localStorage.getItem("users"));
  users = savedUsers;
}

function init() {
  setTimeout(() => {
    loadAllCardsToVar();
    renderUsers(users);
  }, 1000);
}

async function loadAllCardsToLocal() {
  const response = await fetch("./users.json");
  const users = await response.json();
  localStorage.setItem("users", JSON.stringify(users));
}

async function loadAllCards() {
  status.textContent = "Данные загружаются";
  setTimeout(async () => {
    await loadAllCardsToLocal();
    loadAllCardsToVar();
    renderUsers(users);
    status.textContent = ""
  }, 1000);
}

deleteAllCardsBtn.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));
  users = [];
  status.textContent ="удаляем"
  setTimeout(() => {
    renderUsers(users);
  }, 1000);
});

deleteChosenCardBtn.addEventListener("click", () => {
  const inputCard = Number(deleteChosenCardInput.value);
  users = users.filter((user) => {
    return user.id !== inputCard;
  })
  localStorage.setItem("users", JSON.stringify(users));
  status.textContent ="удаляем"
  setTimeout(() => {
    renderUsers(users);
  }, 1000);
});

getAllCardsBtn.addEventListener("click", () => {
  loadAllCards();
});

init();