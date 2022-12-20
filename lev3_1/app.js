import fs from 'fs';


fs.mkdir('./assets', (err) => {
    if (err) return err;
});



const functionA = (param) => {
    fs.access('./assets/text.txt', fs.constants.F_OK, (err) => {
        if (err) console.log(err);
        if (err) {
            fs.writeFile('./assets/text.txt', param, (err) => {
                if (err) return err;
            });
        } else {
            console.log("file exists");
            fs.appendFile('./assets/text.txt', param, (err) => {
                if (err) throw err;
                console.log('Saved!');
            });

        }
    });
};

functionA("\n Ich bin Inhalt des Parameters")


