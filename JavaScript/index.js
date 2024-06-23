console.log('AMWD');

document.write('Lasitha Ruchiranga');
document.write('<h3>ACPT</h3>');
document.write('<button>AMWD</button><br><br>');
document.write('<input type="text"/><button>Submit</button>');

// Numbers 
const num = 10.5;

// String 
const stri = "ACPT 50";

// Boolean 
const bool = false;

// Object
const obj = { name: 'Lasitha', address: 'panadura' };

// Array 
const array = [{}, false, 'Lasitha', 100, []];



// let 
let a = 10;
console.log(a);
a = 50;
console.log(a)
{ let ab = 100; }
// console.log(ab);

// let a = 20;

// var 
var v = 10;
var v = true;
console.log(v);
{ var vv = 888 }
vv = 999;
console.log(vv);

// const 
const co = 10;
// const co = 20;
console.log(co);
// co = 30;
{ const coo = 'acpt' }
// console.log(coo);


// Arithmetic Operators 
// Addition (+)
const s = 20;
const d = 10;
const addition = s + d;
console.log(addition);

// Subtraction (-)
const subtraction = s - d;
console.log(subtraction);

// Multiplication (*)
const mult = s * d;
console.log(mult);

// Division (/)
const division = s / d;
console.log(division);

// Moduls (%)
const mo = s % d;
console.log(mo);

// Increment (++)
let h = 10;
h++
h++
console.log(h);

// Decrement (--)
let i = 20;
i--
i--
console.log(i);

// Comparison Operators 
const l = 13;
const m = 13;

// Equal (==)
console.log(l === m);

// Not Equal (!=)
console.log(l !== m);

// Greater than (>)
console.log(l > m);

// Less than (<)
console.log(l < m);

// Greater than or Equal to (>=)
console.log(l >= m);

// Less than Equal to (<=)
console.log(l <= m);

// Logical Operators 
const y = false;
const x = false;

// AND (&&)
console.log(y && x);

// Or (||)
console.log(y || x);

// Not (!)
console.log(!y);

// Flow Controllers 
// If 

const stu1 = 300;
const stu2 = 250;

if (stu1 > 200) {
    if (stu1 > 250 && stu1 < 300) {
        console.log(" A.1");
    } else {
        console.log("A.2")
    }
} else if (stu1 > 150) {
    console.log("Student 1 Passed..! B");
} else if (stu1 >= 100) {
    console.log("Student 1 Passed..! C")
} else {
    console.log("Fail..!")
}

// Switch 
const val = 'AFSD1';
switch (val) {
    case "ACPT":
        console.log("Pint ACPT");
        break;
    case "AFSD":
        console.log("Print AFSD");
        break;
    default:
        console.log("Non");
        break;  
}

// Array 
// const s = "ajith, "
const array1 = [1, 'ACPT', true, {name: 'Lasitha'}, []];
console.log(array1[10]);

const fruits = ["Banana", "Mango", " Apple", "Orange"];

// POP
// const fruit = fruits.pop();
// console.log(fruit);
// console.log(fruits);

// Push
// fruits.push("Kiwi");
// console.log(fruits);

// Shift
// const fruit = fruits.shift();
// console.log(fruit);
// console.log(fruits);

// Unshift 
// fruits.unshift("Kiwi");
// console.log(fruits);

// Loops
// For Loop

const arr = [23, 65, 87, 101, 345, 87, 987, 54];

for(let w = 0; w < arr.length; w++){
    if(arr[w] == 101){
        break;
    }
    console.log(arr[w]);
}

// While 
let st = 0;
while (st < arr.length){
    console.log(arr[st]);
    st++
}

// do while
let stu = 0;
do {
    stu++
    console.log(arr[stu]);
    
}while(stu < arr.length)

arr.map((val, index)=> {
    console.log(index);
})

// Object 
let car = {
    color: 'red',
    brand: 'bmw',
    seets: 4,
    drive: function(){
        console.log("Drive");
    }
}

console.log(car.color);
car.drive();
car.drive();

// Function 

// Name Function 
function PrintName () {
    console.log("My Name is Lasitha..");
}

PrintName();

// Anonymouse Function 
let fun = function () {
    console.log('Print Fun')
}
fun();

// Arrow Function 
const student = () => {
    console.log('Print Arrow')
}

student();

// function EqualNumber (num1, num2) {
//     let total = num1 + num2;
//     return total;
// }

// const EqualNumber = (num1, num2) => {
//     return num1+ num2;
// }

const EqualNumber = (num1, num2) => num1+ num2;


let val1 = EqualNumber(20, 50);
console.log(val1);

console.log(EqualNumber(106, 3976));


// Input Student Name and Marks > 60
// Print => Eshan is Passed / Eshan is Fail.

const passOrFail = (name, marks) => {
    let resu = "";
    if(marks > 60){
        resu = "Passed"
    }else{
        resu = "Fail"
    }
    return name+" is "+resu
}

const res = passOrFail("Lasitha", 34);
console.log(res);

// Events 

// onClick 
function onClick () {
    console.log("Call onclick function..!")
}

// onChange 
function onChange () {
    // console.log("call onChange..!")
    const value = document.getElementById('change').value
    console.log(value);
}

// onMouseOver 
function mouseOver () {
    console.log('call mouse over');
    document.getElementById('mouse').style.backgroundColor = 'blue'
}

// omMouseOut
function mouseOut () {
    console.log('call mouse Out');
    document.getElementById('mouse').style.backgroundColor = 'red'
}

// key up 
function onKeyUp () {
    console.log("key up..!");
    const res = document.getElementById('key').value;
    document.getElementById('display').innerHTML = res
    // const res = document.getElementById('key').value;
    // document.getElementById('display').innerHTML = res
}

// Key Down 
function onKeyDown () {
    console.log("key down..!");
    // const res = document.getElementById('key').value;
    // document.getElementById('display').innerHTML = res
}

function keyPress () {
    // const res = document.getElementById('key').value;
    // document.getElementById('display').innerHTML = res
}

function img2Hover () {
    document.getElementById('img-1').style.display = 'block'
    document.getElementById('img-2').style.display = 'none'

}

function img1HoverOut () {
    document.getElementById('img-1').style.display = 'none'
    document.getElementById('img-2').style.display = 'block'

}

// Regex 

function changeText () {
    const text = document.getElementById('validation').value
    const reg = /^(0|[1-9]\d*)(\.\d+)?$/;
    if(reg.test(text)){
        console.log("Success..!");
        document.getElementById('error').innerText = "Valid Number..!"
        document.getElementById('error').style.color = "green"
    }else{
        document.getElementById('error').innerText = "Invalid Number..!"
        document.getElementById('error').style.color = "red"
    }
}