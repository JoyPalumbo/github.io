/**
*Data Types: What is a datatype?  Data types hold different types of data. 
*  We use data types so that a computer knows what to do with the information given. 

* 0.There are 8 basic (or primative) data types:
*       1.numbers
*       2.strings
*       3.booleans 
*       4.null
*       5.undefined
*       6.symbols
*       7.objects
*       (8.typeof operators) 
*           
* 1.We use variables to hold data types.
*          
*   A.EXAMPLES of the 8 basic data types:
       1.Numbers are...numbers 2, 4, 11. let x = 2;
          a.
*/       /*example:*/ var num = 2;
//       2. NaN means 'not a number', which means the value is not a legal number. It is a global object
//           a.People don't usually code using NaN but it is what is returned when a math functions fail. 
//           b. You can use isNaN(any number) or 'type of NaN' (isNaN) to see if something is NaN
//               1. EXAMPLE: 
            var cat = 'mr.pickels'/10; //--returns NaN.  We cannot divide a string by a number. The result is not a number
//           c. NaN is a number datatype.
//           d. var cat; --- returs undefined
//       3.Strings are a series of characters that are grouped together by quotation marks. 
//         a.You can use single or double quotation marks to represent a string.
//              1. example:
                let meow = 'cat'; // or "cat".  Both are strings. 
//              2. example: var opSpark = "I go to Operation Spark".  
//           b. You can turn a number into a string by adding quotation marks.
//              1. example: 
                    var x =  '2'; // In some instances this is read as a number and in others, it's read as a string.
//       4.Booleans returns a true or false statement.
//           a. example: if 2 + 2 = 4 return true, if 2 + 2 = 5 return false.
//           b. Example:
//                     var x = 5;
                     var y = 5;
                     var z = 6;
                    (x == y) ;      // Returns true
                    (x == z)  ;     // Returns false
/**              * We can also assign a boolean directly.  Everything with a value is true, everything without a value is false.
*       5. Undefined- When we assign a variable without a value they are undefined, meaning- they have no value or meaning, and will return 'undefined'
*              a. If you declaire a variable but don't assign it a value it will show as undefined
*                     1. example: 
*/                   var cat;  //<----undefined
/**             b. If you do a math propblem using undefined it will return Nan.
*              c. To see if something is undefined we can use 'typeof undefined' and set it to a boolean to see if it returns true or false.
*       6. Null = nothing. It is suppose to be something that doesn't exist but in javascript it is an object.
*             a.Null shows the lack of identification and that the variable points to no object.
*             b. In math problems null is converted to 0. 
*                   1. example: null + 5 = 5
*             c. If you use 'typeof Null' it will return as an object, which is not accurate.
*/             let meowMeow = null;
/**       7.ARRAYS:
*           A. Arrays are used to store multiple valu es within one value.  Arrays use hard brackets and each item within
*             the values in an array are seperated by a comma.  
*              1. Example: var cats = ['siamese', 'ragdoll', 'persian'];
*              2. There different methods we can use on arrays.  Some of them are:
*                   a. To see if something is an array you can use Array.isArray();
*                       1. example: var cat = ['siamese', ragdoll], var dog = 'fluffy';
*                           Array.isArray(cat) = true; Array.isArray(dog) = false;
*                   b. To get the length of an array you can use array.length.  
*                       1. example:var cat = ['siamese', ragdoll]; cat.length = 2
*                   c. To get the last value in an array use array.length -1
                        1.example:  my var = [cat, dog, chicken]
                            if you did var.length -1 it would return 'chicken'
*           B. ACCESSING ARRAYS 
*                 1. To access values in an array and KNOW the index you can use [] bracket notation.  
*                 2. If you need to access a RANDOM value in an array you can use math.random
*                   a. example:  var items = [5,6,7,10,20];
                        var item = items[Math.floor(Math.random()*items.length)];
                    b. example: var myCat = ['persian', 'ragdoll', 'dsh', 'bobcat'];
                        var randomItem = myCat[Math.floor(Math.random()*myCat.length)];
*                 3. If we need to access something in an array OR we need to perform a function on every value/or
*                  certian functions we can use a loop.  The best loop to use on an array is a FOR loop
*                   a. example: var myCat = ['Noodles', 'Pickles', 'Pumkin', 'Harry'];
*                       for (var i = 0; i < myCat.length; i++); 
*                 4. ADDING/SUBTRACTING things to an array
*                   a. To add to an array you can use .push(); This is a method. It will add the new item to the end of the array
*                       1.example: var animals = ['cat', 'dog'];
                             animals.push('chicken');
                             console.log(animals); //will log ['cat', 'dog', 'chicken']
*                   b. you can also use .length to add
                        1. animals[animals.lenth] = 'cow'; //this will add cow to the array
*                   c. To add to the front of an array use .unshift();
                        1.animals.unshift('horse'); //This will return [horse, cat, dog, chicken, cow]
*                   d. To remove an item (from the front of the array) use .shift()
                        1. animals.shift(); //this will return [cat, dog, chicken, cow]
*                   e.To remove an item from the end of an array use .pop()
                        1. animals.pop(); //will return [cat, dog, chicken]
*                   f. To remove an item somewhere else in an array, if you know where it is you can use a for loop and .splice()
                        1. function remove(arr, item) {
                            for (var i = arr.length; i--;) {
                                 if (arr[i] === item) {
                                    arr.splice(i, 1);
                                          }
                                     }
                                }
*                  g. To add an item at a specific index you can use .insert() ==>  arr.insert(index, item)
*           8. OBJECTS are a collection of properties.  
*               1. They hold key/value pairs. Each pair is seperated by a comma.
*                  a. Example: 
*/                                   var cat = {
                                    name: 'Noodles',
                                    breed: 'dsh',
                                    weight:'20lbs' };
/**               2. In objects, properties refers to key/value pairs.
*               3. Objects use curely brackets and each key/value pair are seperated by a comma. 
*               4. To access key/value pairs of an object you can use bracket or dot notation.
*                  a. Example using the key to get that key's value: 
                            console.log(cat.name) ; //logs 'Noodles'
*                                      or 
                            console.log(cat['name']); //logs 'Noodles'
                
*               5. To get the key names of an object you can you Object.keys()
*                  ***Object is written with a CAPITAL 'O'***
*                     a. Example: console.log(Object.keys(cat)); //will return 'name, breed, weight'
*              6. To add a key/value pair to an object
*                     a.example using dot notation: 
*/                            var cars = {
                            type: 'mustang',
                            color: 'purple'
                            }
                            cars.year; // 1970
/**                     b. example using bracket notation: 
                            cars['brand'] = 'ford';
*              7. To remove a key/value pair use delete: 
                     a. example: delete cars['brand'];  // (or delete cars.brand)
*              8. To loop through an object, best to use a for in loop.
                     a. example: for (let key in cars) {
                             }
*           C. Functions are a set of statements that preform actions or calculates a value.  Example:
                            function cats(parameters){
                                 return cat('argument');
                            }
*               1. For more info see Functions section
*           B. Typeof operator lets us see what datatype something is
*               1. example: 
*/               var x = 5;
                console.log(typeof x); //show print "number";
            


/**3. Infinity and -Infinity 
*       A. Infinity is a number value that represents infinity. It is greater than any other number.  
*       1. It is a positive number.  It is within the global scope.
*       2. From MDN website "You might use the Number.POSITIVE_INFINITY property to indicate an error
*                  condition that returns a finite number in case of success. Note, however, 
*                  that isFinite would be more appropriate in such a case."
                a. example of infinity: 1.797693134862315E+308. 
                b. You can creat infinity by this example:
*/                   var infinity = Math.pow(100000/1000000);  
/**       3. Negative inifinity is infinity but is a negative number.
*               a. example of negative infinity -
*/          var negInfinity = Math.pow(100000/-1000000);

/**4. Primitive values,or datatypes are passed to a function BY COPY, complex values are BY REFERENCE.
*       A.  Primatives are atomic and immutable and never change. They are copied by value. This means that the value is copied 
*               and the origional variable is not changed.  The second variable copies the first one but does not change the value of the first variable.
*           1. example: x = 2, y = x.  Therefor y = 2.  But we can then do: y = 5 and x still = 2.
*       B. Primatives have a fixed size in memory.
*           1. Example from GreenLight notes:
                             var a = 1;
                             var b = a; // the value stored in a is copied to b
                             b = 2; //changing the value of 'b' doesn't change what is stored in 'a'
                             console.log(a); //will print '1'
*5. Complex values are mutable and we can change the value to which their keys are assigned.  
*       A. Complex values are copied by reference. This means that they are now connected.  If we change one, it will change the other. 
*                   Another way of looking at it is that with complex data types, there is too much data to be held in the variable
*                   so the variable is just a reference to the actual data. We can view the data as living in a house, and the variable is
*                   at another location but hold the address for the data.  We can give multiple variables the address and they all have access
*                   to the house.  They can each go to the house and change the decor. 
*           1. example:
*/                      var arr = [1, 2, 3];
                        var newArr = arr;
                        newArr.push(4);
                        console.log(arr); // will return [1, 2, 3, 4]
/**       B. Complex values can be any size.
*           1. Example from greenlight notes:
*                           var c = {one: foo};
*                           var d = c;
*                           d.one = 'bar';
*                           console.log(c.one);// will print 'bar'  
*                              the value in b is stored by reference to the value stored in a. 
*                           They will now print the same object.
*/