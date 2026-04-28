import Cafe from "./cafe.js";
import { Drink } from "./drink.js";
import { Cola } from "./drink.js";

const cola = new Cola("Кока-кола", 2, 100, 5);
const jacobs = new Cafe("jacobs", "linkoln-10");
jacobs.orderDrink(cola);
jacobs.showInfo();