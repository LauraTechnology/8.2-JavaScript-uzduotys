//1.	Susumuoti visus skaičiaus tipo kintamuosius
//a.	Rezultatą išvesti į console
const pirmas = 1;

const antras = 2;

const trecias = 3;

const skaiciuTipoKintamujuSuma = pirmas + antras + trecias;
console.log(skaiciuTipoKintamujuSuma);

console.log('-------------------');


//2.	Sujungti visus teksto tipo kintamuosius taip, 
//      jog tarp jų būtų sudarytas tarpas
//a.	Rezultatą išvesti į console

const spalva = 'zalia';
const ugis = 'aukstai'
const isvaizda = 'grazu';

const sujungtiTekstoTipoKintamieji = 'zalia'+' '+'aukstai'+' '+'grazu';
console.log(sujungtiTekstoTipoKintamieji);


console.log('-------------------');


//3.	Apskaičiuoti vertę (value) iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//a.	1-2+3-4+5
//b.	Rezultatą išvesti į console

const menesioDatos = [15, 23, 6, 12, 11];
const valueMenesioDienos = 15 - 23 + 6 - 12 + 11;
console.log(valueMenesioDienos);

const savaitesNumeriai = [1, 2, 3, 4, 5];
const valueSavNum = 1 - 2 + 3 - 4 + 5;
console.log(valueSavNum);


const lyginesDienos = [4, 8, 10, 12, 14]
const valueLygDien = 4 - 8 + 10 - 12 + 14;
console.log(valueLygDien)

console.log('-------------------');


//4. Sujungti sąrašų vertes, kurių tipas yra tekstai, 
//   nuo sąrašo galo iki pradžios taip, 
//   jog tarp jų būtų kablelis ir tarpas

const dienosDarbui = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis'];
const valueDienosDarbui = 'pirmadienis'+','+' '+'antradienis'+','+' '+'treciadienis'+','+' '+'ketvirtadienis'+','+' '+'penktadienis';

console.log(valueDienosDarbui);


const pirmiPenkiMenesiai = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze'];


const metuSezonai = ['vasara', 'pavasaris', 'ziema', 'ruduo', 'atostogos'];