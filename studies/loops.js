/**                                      
* 0. LOOPS
*   Loops are good for accessing each value in an array or object or to run the same code over for each element in the 
*   array or object. We use loops on arrays and objects.

  1.  The 3 main types of loops are:
          1. While loops
          2. for loops
          3. for-in loops

        A.  For loop:     
            1. A for loop is used to iterate through an array. It can also be used for strings. 
            2. It has a start condition, end condition and an incrementer/decrementer.
                    a. There are 3 parts of a for loop
                         1.start condition
                             a. The start condition tells your loop where to begin.
                         2.end condition
                             b. The stopping condition tells the loop where to stop (based on boolean value) 
                         3.increment/decremet
                             c. The incrementer/decrememnter tells the loop how much to move per
                                iteration(either by increasing or decreasing)
          3. Example:  start      end    incrementer
*/                for (var i = 0; i < 5; i++) {
                    console.log('the value is' + " " + i); //logs "the value is (whatever i is)".
                 }
/**             a.  i++ means add 1 to i, i++ = i + 1. It then reassigns the variable it is next to.
                     i = 0 is the start condition,  i < 5 is the stopping condition
                     i++ is the increment

          4. Example 2:
*/                for (var i = 0; i < 4; i++){
                    console.log('The index is ' +  i)
                    }  //logs 'the index is 0', the index is 1, the index is 2, the index is 3.  Stops there because
//                  we have i < 4 so it won't go above 4.
        
//            Example from class:
                 var spotify = [{
                        song: 'Easy',
                        artist: 'Next Town Down',
                        album: 'Easy',},
                        {
                        song: 'Deep End',
                        artist: 'Benji Flow',
                        album: 'Deep End'},
                        {
                        song: 'Numb',
                        artist: 'Jay Wile',
                        album: 'Blue Patio'},
                        {
                        song: 'She lives in my lap',
                        artist: 'Outkast',
                        album: 'Speakerboxxx'}];

                for (var i = 0; i < spotify.length; i++){
                    console.log(spotify[i]['song']); //This will print each song names within the object
                    console.log(spotify[i].artist + '|' + spotify[i].album); 
                 //this will print all of the artists and albums within the object
                }
            //My example:
            var food = [{food: '2 cookies',  gramsOfSugar: 40}, 
          {food: '1 slice of pizza',  gramsOfSugar: 20},
           {food: 'banana', gramsOfSugar: 10}, 
           {food: '2 scoops of ice cream', gramsOfSugar: 50}];
           
            function noSugar(array){
              for(var i = 0; i < food.length; i++){
                if(array[i].food === '2 cookies') {
                    return array[i].gramsOfSugar;
                }
              }
            }
            noSugar(food);  //returns "40"
            

/**   B. For In loops
         For in loops iterate through objects.
           1. Example of the set up: 
                for (var key in object) {
                  statements
                   }

          2. Example:
*/               var cats = {name: 'Noodles',
                           breed: 'ragdoll',
                           favFood: 'Tuna'};
                let catLoop = function(obj){
                for (var key in obj) {
                    if(obj[key] === 'Noodles') {
                      return "I love " + obj.favFood;
                    }
                }
                };
                catLoop(cats);
                //will return "I love tuna". 
                
   
/** C. While loop
       They loop through as long as it returns true:
          1. Example of the setup: while (boolean condition) {
                                      loop statements...
                                  }
         2. Example of while counting down from 10
*/              var start = 10;
                var end = 0;
                while (start > end) {
                 console.log(start);
                 start--;}
                 console.log('Happy New Year!');
                 //will log 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 Happy New Year!
//           To loop a number forward
                var forwards = [];
 
                for (var i = 0; i < 10; i++){;
                    forwards.push(i);
                } // results in forwards = [0, 1, 2, 3, 4, 5, 6, 7, 8. 9]
//          To loop a number backwards
                 var backwards = [];
                for (var i = 10; i > 0; i--) {
                    backwards.push(i);
                } //results in backwards =[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//          To loop forward through an array
                function printArrayValues(array) {
                     for (var i = 0; i < array.length; i++) {
                        console.log(array[i]);
                    }
                }

//          To loop through an array backwards
                function printArrayValuesInReverse(array) {
                    for (var i = array.length-1; i >= 0; i--) {
                         console.log(array[i]);
                    }
                }

//          To loop through an object and print the keys
                function printObjectKeys(object) {
                    for (var key in object) {
                         console.log(key);
                    }
                }                       
