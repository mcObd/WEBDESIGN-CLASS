// OBJECTS
// An Object is a collection of properties, each with a key and a value.
// Objects can be created using object literals or the Object constructor.

let bioData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    friends: ['Ada', 'Bob', 'Tom']
};
bioData.age = 23;
// console.log(bioData.age);

// Example 2
const productInventory = [
    {
        name: "Laptop",
        price:400000,
        count:5,
    },
    {
        name: "Tablet",
        price:40000,
        count:10,
    },
    {
        name: "Iphone",
        price:400,
        count:20,
    }
];

const totalProductInventory = [];

let calTotal = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let newObj ={name : obj.name, total : obj.price * obj.count};
        totalProductInventory.push(newObj);
        
    }
}
calTotal(productInventory);
// console.log(totalProductInventory);

// using the map() equivalent
let calObjTotal = (obj) =>{
    return ({
        name: obj.name,
        total : obj.price * obj.count
    })
}
let totalProductInventory2 = productInventory.map(calObjTotal);

// console.log(totalProductInventory2)




// class engagement : filter out each person that their age is greater than 18 
const people = [
    {
        name: "Folarin",
        age: 26

    },
    {
        name: "Isa",
        age: 18
    },
    {
        name: "Jay",
        age: 15
    },

]
let filterAge = (people) =>{
    return people.age >= 18
}
let peopleAge = people.filter(filterAge);

console.log(peopleAge);