/*
let js = 'amazing';
console.log(40 - +8 + 23);

console.log('Laura');
let firstName = 'Laura'
let firstNamePerson = 'Maria Laura'

console.log(firstName)
console.log(firstName)
console.log(firstName)

let PI = 3.14159

let myFirstJob = 'Programmer'
let myActualJob 

let age = 30;

age = 31;

const birthYear = 1991;

var job = 'progammer'; // no usar
job = 'teacher';

const now = 2023;
const ageLaura = now - 1966;
const ageDiego = now - 1962;
console.log(ageLaura, ageDiego);

console.log(ageLaura * 2);
console.log(ageLaura, ageDiego / 10, 2 ** 3);

const firstName = 'Maria';
const lastName = 'Estefania';
console.log(firstName + ' ' + lastName);
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparacion de elementos
console.log(ageLaura > ageDiego);
console.log(ageLaura >= 57)

const isFullAge = ageLaura > 15;
console.log((now - 1991) > (now - 2019))


const firstName = 'laura';
const jobLaura = 'tester';
const nacimiento = 1966;
const actualYear = 2023;

let laura = "I'm " + firstName + ', a ' + (actualYear - nacimiento) + "years old " + jobLaura;

console.log(laura)

const jonasNew = `I am ${firstName} a  ${actualYear - nacimiento}`;
console.log(jonasNew)

console.log(`Strin with \n\
multime \n\
line`)
*/

const age = 15;

if (age >= 18) {
    console.log('Sarah puede manejar')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara es muy joven. le faltan ${yearsLeft} years`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;

} else {
    century = 21;
}

console.log(century);
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 19);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + '3')
console.log('23' / '2')

let n = '1' + 1 // 11
n = n - 1 + 1
console.log(n);

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

//if (shouldDrive && hasGoodVision) {
//console.log('Sarah is able to drive');
//else {
//  console.log('Someone else should drive ...')
//

const isTired = false;

console.log(shouldDrive && hasGoodVision || isTired)

if (shouldDrive && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive ...')
}
const day = 'sunday';
switch (day) {
    case 'monday':
        console.log('Plan my course structure');
        console.log('Go to coding meet up');
        break;
    case 'tuesday':
        console.log('prepare videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Not es un dia valido');
}

day === 'saturday' || day === 'sunday' ? console.log('Es fin de semana') : console.log('Es dia laborable');