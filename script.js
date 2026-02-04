const mainTitle = document.querySelector('.main-title');
const colorRedTitleButton = document.getElementById('color-red-title-button');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle);
});

colorRedTitleButton.addEventListener('click', () => {
  mainTitle.classList.toggle('red');

});