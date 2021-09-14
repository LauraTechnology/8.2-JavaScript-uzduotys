// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
//
// 2.	Išvesti teksto tipo kintamųjų ilgius
const vaisiai = ['obuolys', 'uoga', 'citrina', 'abrikosas'];


console.log(vaisiai[0].length);
console.log(vaisiai[1].length);
console.log(vaisiai[2].length);
console.log(vaisiai[3].length);

console.log('---------');

// 3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

// a.	kuris didesnis
if (vaisiai[0].length > vaisiai[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');


// b.	kuris mažesnis
if (vaisiai[0].length < vaisiai[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');


// c.	ar jie lygūs
if (vaisiai[0].length === vaisiai[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');


// d.	ar jie nelygūs
if (vaisiai[0].length !== vaisiai[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');


// e.	kuris didesnis arba lygus
if (vaisiai[0].length >= vaisiai[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');


// f.	kuris mažesnis arba lygus
if (vaisiai[0].length <= vaisiai[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');


// 4.	Išvesti sąrašo tipo kintamųjų ilgius

const vaisiaiIlgis = vaisiai.length;
console.log(vaisiaiIlgis);


const raides = ['a', 'b', 'c', 'd', 'e',];
console.log(raides);

const raidesIlgis = raides.length;
console.log(raidesIlgis);

console.log('---------');

// 5.	Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

// a.	kuris didesnis
if (vaisiaiIlgis > raidesIlgis) {
    console.log('Bandykite kitą kartą.');
} else {
    console.log('Pomidoras');
}

console.log('---------');

// b.	kuris mažesnis
if (vaisiaiIlgis < raidesIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------');

// c.	ar jie lygūs
if (vaisiaiIlgis === raidesIlgis) {
    console.log('Bandykite kitą kartą.');
} else {
    console.log('Pomidoras');
}

console.log('---------');

// d.	ar jie nelygūs
 if (vaisiaiIlgis !== raidesIlgis) {
     console.log('Pomidoras');
 } else {
     console.log('Bandykite kitą kartą.');
 }

 console.log('---------');

// e.	kuris didesnis arba lygus
if (vaisiaiIlgis >= raidesIlgis) {
    console.log('Bandykite kitą kartą.');
} else {
    console.log('Pomidoras');
}

console.log('---------');

// f.	kuris mažesnis arba lygus
if (vaisiaiIlgis <= raidesIlgis) {
    console.log('Bandykite kitą kartą.');
} else {
    console.log('Pomidoras');
}

console.log('---------');

