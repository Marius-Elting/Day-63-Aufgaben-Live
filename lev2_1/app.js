import fs from 'fs';
import jsonData from './data.json' assert { type: "json" };

console.log(jsonData);
const functionA = () => {

    fs.writeFileSync("data.txt", "", (err) => { console.log(err); });
    console.log("data");
    jsonData.forEach((data) => {
        fs.appendFileSync("data.txt", ` \n ${data.id} - ${data.title}`, (err) => { console.log(err); });
        fs.appendFileSync("data.txt", ` \n ${data.description}`, (err) => { console.log(err); });
    });
};
functionA();


// fs.readFileSync('./data.json', (err, data) => {
//     console.log(err);
//     console.log("hallooo");
//     jsonData = JSON.parse(data.toString());
//     functionA();
// });
