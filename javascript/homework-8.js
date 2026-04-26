import { products } from './products.js';
const productTemplate = document.getElementById('product-card-template');
const productContainer = document.querySelector('.catalog');

function renderProductCards(productCards) {
  productContainer.innerHTML = '';
  productCards.forEach(productCard => {
    const productClone = productTemplate.content.cloneNode(true);
    const image = productClone.querySelector('.card__image');
    image.src = `./images/${productCard.imageUrl}.png`;

    productClone.querySelector('.card__spec').textContent = productCard.typeSkin;
    productClone.querySelector('.card__name').textContent = productCard.name;
    productClone.querySelector('.card__description').textContent = productCard.description;
    productClone.querySelector('.card__list-header').textContent = 'Состав: ';

    const productCardList = productClone.querySelector('.card__list');
    productCardList.innerHTML = '';
    productCard.composition.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('card__list-child');
      li.textContent = item;
      productCardList.appendChild(li);
    });

    productClone.querySelector('.card-price').textContent;
    productClone.querySelector('.card-price__leftside').textContent = 'Цена:';
    const currency = '\u20BD';
    productClone.querySelector('.card-price__rightside').textContent = `${productCard.price} ${currency}`
    productContainer.appendChild(productClone);
  });
};

const productNameToDescriptionMap = products.reduce((acc, card) => {
  return [...acc, { [card.name]: card.description }];
}, []);
console.log(productNameToDescriptionMap);

function displayNumberCards() {
  const numberCards = prompt('Сколько карточек отобразить?');
  const count = parseInt(numberCards);
  if (!isNaN(count) && count >= 1 && count <= 5) {
    renderProductCards(products.slice(0, count));
  } else {
    alert('Пожалуйста введите число от 1 до 5');
  };
};
displayNumberCards();