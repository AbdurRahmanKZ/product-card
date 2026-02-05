// Объявление переменных и присвоение html элементов
const mainTitle = document.querySelector('.main-title');
const toggleColorButton = document.getElementById('toggle-color-button');
// Создание слушателя событий для заголовка с выводом его в консоль
mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
});
// Создание слушателя событий для кнопки с покраской заголовка в красный с classList.toggle
toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('red');
});