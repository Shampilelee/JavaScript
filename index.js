const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "berry", color: "black", calories: 37 }
]

console.log(fruits[0].name);
fruits.push({name: "grapges", color: "purple", calories: 62})
console.log(fruits);
fruits.pop();
console.log(fruits);

