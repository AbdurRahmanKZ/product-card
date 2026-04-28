export default class Cafe {
  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }
  showInfo() {
    console.log(`${this.name} is cafe on ${this.adress}`);
  }
  orderDrink(drink) {
    console.log(`вы заказали: ${drink.name};`)
    drink.prepare();
    drink.serve();
  }
}