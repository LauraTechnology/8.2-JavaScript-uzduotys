// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
// 

/*

PERFRAZUOJU:

Jei rezultatas tenkina palyginimo salyga
JEI a > b , console.log spausdina ''Pomidoras''
Jei netenkina
JEI a nera > b, console.log spausdina “Bandykite kitą kartą.”

*/

// 1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// a.	kuris didesnis



const a = 200;
const b = 10;

if (a > b) {
   console.log('Pomidoras');
} else {
  console.log('Bandykite kitą kartą')
}

console.log('---------');


// b.	kuris mažesnis

/* Jeigu 200 maziau uz 10 - Bandykite dar karta
   Jeigu 200 daugiau uz 10 - Pomidoras
*/
if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('---------');


// c.	ar jie lygūs

if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('---------');


// d.	ar jie nelygūs

if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą karta');
}

console.log('---------');



// e.	kuris didesnis arba lygus

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('---------');



// f.	kuris mažesnis arba lygus

if (a <= b) { 
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('---------');
