//
function Pizza (userName, pizzaTopping, pizzaSize) {
  this.name = userName
  this.pizzaTopping = pizzaTopping,
  this.pizzaSize = pizzaSize,
  this.price = 20;
}

Pizza.prototype.calculatePizzaTopping = function() {
  if (this.pizzaTopping === "Cheese") {
    this.price -= 4;
  } else if (this.pizzaTopping === "Pepperoni") {
    this.price -= 2;
  } else if (this.pizzaTopping === "Meat lovers") {
    this.price += 2;
  } else {
    this.price += 4;
  }

}














// UI
$(document).ready(function() {
  $("#pizzaorder").submit(function(event) {
    event.preventDefault();











  });
});
