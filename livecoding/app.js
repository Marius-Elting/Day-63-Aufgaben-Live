import fs from 'fs';
import { constants } from 'fs/promises';
const daten = "Hallo, ich kann Dateien erschaffen";
// fs.writeFile('./hello.txt', daten, (err) => {
//     console.log(err);
//     console.log("inhalt geschrieben");
// });

// fs.readFile('./hello.txt', (err, data) => {
//     //! Gibt nur einen Error aus wenn es einen gibt 
//     if (err) console.log(err);
//     //! Gibt die Daten als Hexadezimal-Format aus
//     console.log(data);
//     //! Wandelt das Hexadezimal-Format in einen String um
//     console.log(data.toString()); /*oder*/ String(data);
// });

// const products = [
//     {
//         name: "Teekocher",
//         preis: 59.95,
//     },
//     {
//         name: "PowerRanger Mighty Force",
//         preis: 199.95,
//     }
// ];

// fs.writeFile('./products.json', JSON.stringify(products), (err) => {
//     if (err) console.log(err);
// });

// fs.readFile('./products.json', (err, data) => {
//     if (err) console.log(err);
//     // const products = JSON.parse(String(data));
//     console.log("stringDataa " + data.toString());
//     const products = data.toString();
//     console.log("unsere Produkte " + JSON.parse(products));
// });

// console.log(products);
// console.log(JSON.stringify(products));



// !function = first class objects | frist class citizien
//! wir können Functions in Variablen speichern und diese dann als argumente an funktionen übergeben

function ichRufDichAuf(aufruf) {
    for (let i = 0; i <= 20000; i++) {
        console.log(i);
    }
    aufruf();
}
const aufruf = () => console.log("what goes");

ichRufDichAuf(aufruf);

// checken ob eine Datei vorhanden ist 

fs.access('./products.json', fs.constants.F_OK, (err) => {
    if (err) return err;
    console.log("Die Datei ist vorhanden");
});