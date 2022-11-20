// import code from people.js file
//const xyz = require('./people');

// destructering
// const { people, ages } = require('./people');
// console.log(people, ages)

// this will return an empty object
// sinces we just module.export on the people.js file to set something to 
// the xyz varibale, something will return instead of an empty object.
//console.log(xyz);

// just because we imported the people.js file does not mean
// we can read variables off of it. you can only access them
// from the original file.
//console.log(people); 

//accessing the imported variables individually
//console.log(xyz.ages, xyz.people)

const os = require('os');

console.log(os.platform())

