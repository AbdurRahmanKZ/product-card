const containerUser = document.querySelector(".users-catalog");
const userTemplate = document.querySelector("#users-catalog");
const status = document.querySelector(".status");
const deleteAllCardsBtn = document.querySelector("#delete-all-button");
const deleteChosenCardBtn = document.querySelector("#delete-chosen-button");
const deleteChosenCardInput = document.querySelector("#delete-chosen-input");
const getAllCardsBtn = document.querySelector("#get-all-button");

let users;
let userFromFile;

function setLocal(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadLocal() {
  const savedUsers = JSON.parse(localStorage.getItem("users"));
  return savedUsers;
}

async function loadFentch() {
  try {
    const response = await fetch("./users.json");
    if (!response.ok) {
      throw new Error("Ошибка загрузки файла")
    }
    const usersFromFile = await response.json();
    if (!Array.isArray(usersFromFile)) {
      throw new Error("Данные не являются массивом");
    }
    if (usersFromFile.length === 0) {
      throw new Error("Файл пустой");
    }
    return usersFromFile;
  } catch (err) {
    status.textContent = err.message;
  }
}


function renderUsers(users) {
  containerUser.innerHTML = "";
  setTimeout(() => {
    if (!Array.isArray(users) || users.length === 0) {
      status.textContent = "нет данных"
      setTimeout(() => {
        status.textContent ="";
      }, 1000);
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
  }, 1000);
}

async function onLoad() {
  const savedUsers = loadLocal();
  if (Array.isArray(savedUsers)) {
    users = savedUsers;
    renderUsers(users);
    return;
  }
  users = await loadFentch();
  setLocal(users);
  renderUsers(users);
}

deleteAllCardsBtn.addEventListener("click", () => {
  users = [];
  localStorage.setItem("users", JSON.stringify(users));
  status.textContent = "удаляем"
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
  status.textContent = "удаляем"
  setTimeout(() => {
    renderUsers(users);
  }, 1000);
});

getAllCardsBtn.addEventListener("click", async () => {
  status.textContent = "Данные загружаются";
  userFromFile = await loadFentch();
  setTimeout(() => {
    if (JSON.stringify(userFromFile) === JSON.stringify(users)) {
      status.textContent = "уже загружено"
      setTimeout(() => {
        status.textContent = ""
      }, 1000);
      return;
    } else {
      users = userFromFile;
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers(users);
    }
  }, 1000);
});

onLoad();