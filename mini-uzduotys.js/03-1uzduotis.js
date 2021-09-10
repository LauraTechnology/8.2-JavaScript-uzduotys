// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “bandykite”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
// 
// 1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// a.	kuris didesnis

const a = 200;
const b = 10;

if (a > b) {
    const bandykite = `${a} yra daugiau uz ${b}`;
    console.log(bandykite);
} else {
    const pomidoras = `${a} yra NE daugiau uz ${b}`;
    console.log(pomidoras)

}


// b.	kuris mažesnis
// c.	ar jie lygūs
// d.	ar jie nelygūs
// e.	kuris didesnis arba lygus
// f.	kuris mažesnis arba lygus