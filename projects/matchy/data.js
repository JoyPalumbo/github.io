/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'fluffy';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises = ['woof'];
noises.push('meow');
noises.unshift('bark');
noises.push('moo');
console.log(noises.length);
console.log(noises.length -1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
noises.push('bork');
console.log(noises);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *dot and bracet notation 
 * 2. What are the different ways of accessing elements on arrays?
 *using bracket notation with index postion
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck',
            name: 'Jerome',
            noises: ['squack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);
console.log(animals);
var elephant = {species: 'elephant',
            name: 'Jojo',
            noises: ['oooouuuii', 'woosh']};
animals.push(elephant);
var unicorn = {species: 'unicorn',
            name: 'Sparkle',
            noises: ['winny', 'naaay']};
animals.push(unicorn);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; //We choose to use an array to hold our friend object;

function getRandom(arr) {
    // min = Math.ceil(min);
    // max = Math.floor(maxk);
    // min = animals[animals[0]];
    // max = animals[animals.length -1];
    // console.log(Math.floor(Math.random() * (max - min))  + min);
//     for(var i = 0; i < arr.length; i++){
//   return friends.push(Math.floor(Math.random(i) * Math.floor(i)));
//     }
    return Math.floor(Math.random() * arr.length);
    //   return friends.push(Math.floor(Math.random() * Math.floor(arr)));
     
}
// getRandom(animals);
// var newFriend = friends.push(getRandom(animals));
// get the random index number from the function
//access the name property of that random index
//add that name to the friends array

var myNumber = getRandom(animals);
var randomAnimal = animals[myNumber];
friends.push(randomAnimal.name);
console.log(friends);

for(var i = 0; i < animals.length; i++) {
 animals[i].friends = friends;
}



//  animals[getRandom(animals)];
// console.log((friends) + 'HERE');




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
