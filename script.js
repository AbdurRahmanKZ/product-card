// Объявление переменных и присвоение html элементов
const mainTitle = document.querySelector('.main-title');
const colorRedTitleButton = document.getElementById('color-red-title-button');

// Создание слушателя событий для заголовка с выводом его в консоль
mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle);
});

// Создание слушателя событий для кнопки с покраской заголовка в красный с classList.toggle
colorRedTitleButton.addEventListener('click', () => {
  mainTitle.classList.toggle('red');
});