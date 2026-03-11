let fruits = ["apple", "banana", "cherry"];
let vegetables = ["carrot", "broccoli", "spinach"];

let combined = [...fruits, ...vegetables];
let numbers = [...fruits,1, 2, 3];

vegetables.push(fruits);

console.log(vegetables);
console.log(numbers);
console.log(combined);

