import fs from 'fs';

fs.readFile('./blog1.txt', (err, data) => {
    if (err) return err;
    console.log(data.toString());
});

fs.writeFile('./blog1.txt', "was GHGeht", (err) => {
    if (err) console.log(err);
});

fs.writeFile('./blog2.txt', "was GHGeht", (err) => {
    if (err) console.log(err);
});


fs.mkdir('./assets', (err) => {
    if (err) return err;
});


fs.access('./assets', fs.constants.F_OK, (err) => {
    if (err) return err;
    fs.rm("./assets", { recursive: true, force: true }, (err) => {
        if (err) console.log(err);
    });

});

fs.writeFile('./delete.txt', "", (err) => {
    if (err) console.log(err);
});

fs.access('./delete.txt', fs.constants.F_OK, (err) => {
    if (err) return err;
    fs.rm("./delete.txt", { recursive: true, force: true }, (err) => {
        if (err) console.log(err);
    });

});
fs.writeFile('./hello.txt', "", (err) => {
    if (err) console.log(err);
});

fs.rename("./hello.txt", "./helloworld.txt", (err) => {
    if (err) console.log(err);
});
// fs.unlink('./assets', (err) => {
//     if (err) return err;
//     console.log('path/file.txt was deleted');
// });