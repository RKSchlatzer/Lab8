//Below generates a list utilizing the different indexes within the 'grcoceries' variable/array & provides a total
var groceries = [
{name: 'Cereal', price: 2.99},
{name: 'Milk', price: 2.75},
{name: 'Bread', price: 2.89},
{name: 'Beer', price: 9.99},
];

for (i=0; i<groceries.length; i++) {
console.log(groceries[i].name + ": $" + groceries[i].price);
}

var sum = 0;
for (x=0; x<groceries.length; x++){
sum += groceries[x].price;
}
console.log("Total: $"+sum)

//Below is an an alternative way to generate the list & prices utilzing multiple variables with  properies
var cereal = {name: 'Cereal', price: 2.99};
var milk = {name: 'Milk', price: 2.75};
var bread = {name: 'Bread', price: 2.89};
var beer = {name: 'Beer', price: 9.99};

var shoppingList = [cereal, milk, bread, beer];

for (i=0; i<shoppingList.length; i++) {
  console.log(shoppingList[i].name + ": $" + shoppingList[i].price)
};

var sum = 0;
for (x=0; x<shoppingList.length; x++){
sum += shoppingList[x].price;
}
console.log("Total: $"+sum);
