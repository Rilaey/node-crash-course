// before managing files with node you must require the module for it
const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// writing files
// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log('file was written');
// })
// // creating a 2nd text file with "hello world" as the txt
// fs.writeFile('./docs/blog2.txt', 'hello again', () => {
//     console.log('file was written');
// })

// directories
// fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder created');
// })

// delete files