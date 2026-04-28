// 3 задание создать структуру Классов с Наследованием
class Car {
  constructor(name, producedYear, model) {
    this.name = name;
    this.producedYear =producedYear;
    this.model = model;
  }
  showInfo() {
    console.log(`${this.name} was produced in ${this.producedYear} model: ${this.model}`);
  }
};
class HeavyCar extends Car {
  constructor(name, producedYear, model, weight) {
    super(name, producedYear, model);
    this.weight = weight;
  }
  checkWeight() {
    if (this.weight >= 3000) {
      console.log(this.name + " is " + "heavy");
    } else {
      console.log(`${this.name} is light`)
    }
  }
  isSlow = true;
};
class SportCar extends Car {
  constructor(name, producedYear, model, maxSpeed) {
    super(name, producedYear, model);
    this.maxSpeed = maxSpeed;
  }
  showSpeed() {
    console.log(this.maxSpeed);
  }
};
class ElectricCar extends Car {
  constructor(name, producedYear, model, batteryCapacity) {
    super(name, producedYear, model);
    this.batteryCapacity = batteryCapacity;
  }
  showBatteryCapacity() {
    console.log(this.batteryCapacity);
  }
};
const heavyToyota = new HeavyCar("Toyota", 2005, "200", 3000);
const bently = new SportCar("Bently", 2025, "Ultra", 320);
const tesloid = new ElectricCar("Tesloid", 2021, "XD-1", 500);
heavyToyota.checkWeight();
bently.showSpeed();
tesloid.showBatteryCapacity();
tesloid.showInfo();