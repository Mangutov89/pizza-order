
function Pizza (userName, pizzaTopping, pizzaSize) {
  this.name = userName
  this.pizzaTopping = pizzaTopping,
  this.pizzaSize = pizzaSize,
  this.price = 20;
}

Pizza.prototype.calculatePizzaTopping = function() {
  console.log("step1");
  if (this.pizzaTopping === "1") {
    this.price -= 4;
    console.log("hello");
  } else if (this.pizzaTopping === "2") {
    this.price -= 2;
  } else if (this.pizzaTopping === "3") {
    this.price += 2;
  } else if (this.pizzaTopping === "4") {
    this.price += 4;
  }
}

Pizza.prototype.calculatePizzaSize = function() {
  if (this.pizzaSize === "small") {
    this.price -= 3;
  } else if (this.pizzaSize === "medium") {
    this.price -= 1;
  } else if (this.pizzaSize === "large") {
    this.price += 2;
  }
}














// UI
$(document).ready(function() {
  $("#pizzaorder").submit(function(event) {
    event.preventDefault();











  });
});
