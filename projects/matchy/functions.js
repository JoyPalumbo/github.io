/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    for(var i = 0; i < animals.length; i++) {
      if (animals[i].name === name) {
        //   console.log(animals[i], 'HERE');
            return animals[i];
        }
       
        }
        return null;
    }
//  for(var i = 0; i < animals.length; i++) {
//      if(animals[i].hasOwnProperty(name)) {
//          return animals[i];
//      }
//  }
//  }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //animals is an array of object
    //loop through array to access each object
    //in the object check to see if name exists
   
    // for(var i = 0; i < animals.length; i++) {
    //     if(animals[i].name === name) {
    //         animals.slice(animals[i]);
    //         animals.push(replacement);
    //     }
    // }

    // }

 
     for(var i = 0; i < animals.length; i++) {
      if(animals[i].name === name){
             animals.splice(i,1,replacement); 
             
         }
     } 
     
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//works in repl.it but not here
//   for(var i = 0; i < animals.length; i++) {
//       if(animals[i].indexOf(name)){
//          animals.splice(i, 1);

function remove(animals, name) {
      for(var i = 0; i < animals.length; i++) {
        //   var arr = animals[i];
        if(animals[i].name === (name)){
         animals.splice(i, 1);
        }
      
      }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//also works in repl.it but not passing this test
function add(animals, animal) { 
   
    for(var i = 0; i < animals.length; i++) {
    // var arr = animal['species'];
    if(animal.name === animals[i].name){
        return;
    }
    }
    if(animal.name.length > 0 && animal.species.length > 0){
         animals.push(animal);
    }
    

    
}
//     for(var i = 0; i < animals.length; i++) {
//         if(animal.name.length > 0 && animal.species.length > 0 && !animals[i].hasOwnProperty(animal.name)) {
//          animals.push(animal);
//         }
//     }
// }
    // for(var i = 0; i < animals.length; i++)
    // var arr = animal['species'];
    // if(animal.name.length > 0 && arr.length > 0 && !animals.hasOwnProperty(animal.name)){
    //     return animals.push(animal);
    // }
  
    // else {
    // return animals;
    // }



//  if(animal[key] === animal.name && animal.name.length > 0 && animal[key] === animal.species && animal.species.length >0) {
//   return animals.push(animal);
//         }
   



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
