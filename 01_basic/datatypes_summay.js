// Primitive Data Types
// String, Number, Boolean, null, undefind, Symbol, BigInt

let username = "Guru"
const score = 100
// const score = 100.3
const isLoggedIn = false
const outsideTemp = null
let useremail;
// let useremail = undefind
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789101112n


// Reference Data Type (Non-Primitive)
// Arrray, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name : "Guru",
    age : 21 
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof outsideTemp);

// Stack = Primitive , Heap = Non-Primitive

// Eg - Stack
let myYoutubeName = "GuruMahajandotcom"
let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

// Eg - Heap
let userOne = {
    email: "user@google.com" ,
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "guru@google.com"

console.log(userOne.email);
console.log(userTwo.email);