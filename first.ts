let age : number = 25;

let club: string = 'Real Madrid';

const isFamous: boolean = true;  //const hole assign korte hobe jokon declare korbe

let famous : boolean;

// function add (num1:number |string, num2:number|string){
//     return num1 + num2;
// }

function add (num1:number, num2:number){
    return num1 + num2;
}

add(3, 4);
// add('s', 'a');
//add('a', 5);

function fullName (firstName:string, lastName: string) :string{
    return firstName + ' ' + lastName;
}

function doubleItAndConsole(num:number):void {
    const result = num * 2;
    console.log(result);
}

const user = fullName('Salina', 'Haque');
console.log(user);

const output = doubleItAndConsole(10);
console.log('output' , output);

let multiply2 : (x: number, y: number) => number;

const multiply = (x: number, y:number):number => x * y;
console.log(multiply(2,3));

//array
const numbers: number[] = [2, 5, 34, 32, 5, 6];
numbers.push(12);

const friends: string[] = ['Adil', 'Duha', 'Luna', 'Shova'];

let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    
    const friend:string = friends[i];

    if(friend.length > megaName.length){
        megaName = friend;
    }
    
}
console.log('friend with large name', megaName);

//object

let player :  {club:string, salary:number} = {
    club: 'Barcelona',
    salary: 2000000
}
player.salary = 234444;

// let player :  {club:string, salary:number} 
// player= {
//     club: 'Barcelona',
//     salary: 2000000
// }

interface Player {
    club: string,
    name: string,
    salary: number,
    isPlaying: boolean,
    wife?: string
}

const messy : Player = {
    club : 'real madrid',
    name : 'messy',
    salary: 23444444,
    wife: 'some name',
    isPlaying : true
}

const ronaldo : Player = {
    club : 'real madrid',
    name : 'ronaldo',
    salary: 230000000,
    isPlaying : true
}

function getBonus (player : {salary: number}){
    return player.salary * 0.1;
}

const poorPlayer = {salary: 100000}
getBonus(poorPlayer);

function getMoney (player : Player, friends: string[]){
    console.log(friends);
    return player.salary * 0.1;
}

getMoney(messy, ['Sam', 'Rob']);

class Person {
    name: string;
    private _partner: string;
    readonly fatherName : string;

    constructor(name: string, father: string) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() : string{
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