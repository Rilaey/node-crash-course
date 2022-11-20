const people = ['riley', 'ashley', 'tyler', 'edna'];
const ages = [24, 25, 26, 25];

//console.log(people)

// how to export a single thing
//module.exports = people;

// how to export multiple things. turn it into an object
module.exports = {
     people: people,
     ages: ages
};