// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
//
// 2.	Išvesti teksto tipo kintamųjų ilgius
const vaisiai = ['obuolys', 'uoga', 'citrina', 'abrikosas'];
console.log(vaisiai);

const vaisiaiIlgis = vaisiai.length;
console.log(vaisiaiIlgis);


const raides = ['a', 'b', 'c', 'd', 'e',];
console.log(raides);

const raidesIlgis = raides.length;
console.log(raidesIlgis);

console.log('---------');

//
// 3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//

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