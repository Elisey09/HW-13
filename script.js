const HAMBURGER_TYPES = {
  small: {
    price: 50,
    calories: 20,
  },
  medium: {
    price: 75,
    calories: 35,
  },
  large: {
    price: 100,
    calories: 40,
  },
};

const TOPPINGS = {
  cheese: {
    price: 10,
    calories: 20,
  },
  salad: {
    price: 20,
    calories: 5,
  },
  potato: {
    price: 15,
    calories: 00,
  },
  powde: {
    price: 15,
    calories: 0,
  },
  mayo: {
    price: 20,
    calories: 5,
  },
};

function Hamburger(type) {
  this.type = type;
  this.toppings = [];
  this.calcPrice = function () {
    return (
      this.type.price +
      this.toppings.reduce((acc, e) => {
        return acc + e.price;
      }, 0)
    );
  };
  this.calcCalories = function () {
    return (
      this.type.calories +
      this.toppings.reduce((acc, e) => {
        return acc + e.calories;
      }, 0)
    );
  };
  this.addTopping = function (topping) {
    this.toppings.push(topping);
  };
}

const hamburger = new Hamburger(HAMBURGER_TYPES.small);

hamburger.addTopping(TOPPINGS.cheese);
hamburger.addTopping(TOPPINGS.salad);
hamburger.addTopping(TOPPINGS.potato);
hamburger.addTopping(TOPPINGS.mayo);

console.log("First Burger");
console.log(`Price with sauce: $${hamburger.calcPrice()}`);
console.log(`Callories with sauce: ${hamburger.calcCalories()}`);

const hamburger2 = new Hamburger(HAMBURGER_TYPES.large);

hamburger2.addTopping(TOPPINGS.cheese);
hamburger2.addTopping(TOPPINGS.salad);

console.log("Second Burgerrr");
console.log(`Price with sauce: $${hamburger2.calcPrice()}`);
console.log(`Callories with sauce: ${hamburger2.calcCalories()}`);
