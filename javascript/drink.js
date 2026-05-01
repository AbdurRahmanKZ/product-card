export class Drink {
  constructor(name, size, cost, temperature) {
    if (new.target === Drink) {
      throw new Error("Drink is abstract class");
    }
    this.name = name;
    this.size = size;
    this.cost = cost;
    this.temperature = temperature;
  }
  showInfo() {
    console.log(`name: ${this.name}; size: ${this.size}; cost: ${this.cost}; temperature: ${this.temperature};`);
  }
  getTemperature() {
    return this.temperature;
  }
  setTemperature(temperature) {
    this.temperature = temperature;
  }
  serve() {
    console.log(`${this.name} подан клиенту...`)
  }
}
class Lemonade extends Drink {
  constructor(name, size, cost, temperature, color) {
    super(name, size, cost, temperature);
    this.color = color
  }
  showInfo() {
    super.showInfo();
    console.log("color: " + this.color)
  }
  #prepare() {
    console.log(`смешиваем воду с лимоном и сахаром и вот ${this.name} готов`)
  }
}
export class Cola extends Drink {
  constructor(name, size, cost, temperature, hasSugar) {
    super(name, size, cost, temperature);
    this.hasSugar = hasSugar;
  }
  showInfo() {
    super.showInfo();
    console.log("hasSugar: " + this.color)
  }
  #prepare() {
    console.log(`секретный рецепт колы не раскрыть, ее начали готовить но у вас завязаны глаза, по запаху вы понимаете что ${this.name} готова`)
  }
  prepare() {
    this.#prepare();
  }
}
class Water extends Drink {
  constructor(name, size, cost, temperature, mineralIndex) {
    super(name, size, cost, temperature);
    this.meneralIndex = mineralIndex;
  }
  showInfo() {
    super.showInfo();
    console.log("temperature: " + this.temperature)
  }
  #prepare() {
    console.log(`наливаем из под крана и ${this.name} готова`)
  }
}