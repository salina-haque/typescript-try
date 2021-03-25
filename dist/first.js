"use strict";
let age = 25;
let club = 'Real Madrid';
const isFamous = true; //const hole assign korte hobe jokon declare korbe
let famous;
// function add (num1:number |string, num2:number|string){
//     return num1 + num2;
// }
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
// add('s', 'a');
//add('a', 5);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const user = fullName('Salina', 'Haque');
console.log(user);
const output = doubleItAndConsole(10);
console.log('output', output);
let multiply2;
const multiply = (x, y) => x * y;
console.log(multiply(2, 3));
//array
const numbers = [2, 5, 34, 32, 5, 6];
numbers.push(12);
const friends = ['Adil', 'Duha', 'Luna', 'Shova'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('friend with large name', megaName);
//object
let player = {
    club: 'Barcelona',
    salary: 2000000
};
player.salary = 234444;
const messy = {
    club: 'real madrid',
    name: 'messy',
    salary: 23444444,
    wife: 'some name',
    isPlaying: true
};
const ronaldo = {
    club: 'real madrid',
    name: 'ronaldo',
    salary: 230000000,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * 0.1;
}
const poorPlayer = { salary: 100000 };
getBonus(poorPlayer);
function getMoney(player, friends) {
    console.log(friends);
    return player.salary * 0.1;
}
getMoney(messy, ['Sam', 'Rob']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + '' + this._partner;
    }
}
const sam = new Person('Sameul', 'David');
console.log(sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';
//public sob jaygay
//private sudu class er vitor
// readonlu dudu constructor e write korte parbe baire na
//protected nijer class and inherited class
