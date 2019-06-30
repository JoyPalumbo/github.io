/**
*0. FUNCTIONS
 1.First we have to declare the funtion by writing the word "function" and giving it a name
     A. Example: function cat() {
         
     }
 2.Some functions are annonymous, meaning they do not have a name: 
   A. funcion (){
                   
              }
 3. Next, we can optionally give the function parameters. A function can take any number of parameters
    A. Paramters are just placeholrders for argumanets that are later passes or given to the function at call time.
 4. Next we give the function a set of code(or block of code), something for the function to do.
    A. Example:
 */       function cat2(name) {
          return 'I love' + " " + name + "'s";
      } 
      var name = 'ragdoll';
      cat2(name); //This should return 'I love ragdoll's' ***This is how we CALL a function***
      
      
/** 
* 5. Function parameters are values that are part of the function definition. Parameters are what are between the parenthesis
      A. Example: function cat('this is the parameter')
      or   function cat(parameter1, paramater2, parameter3)
      B. Parameters can be numbers, strings, fuctions, etc
  6. Function arguments are what are passed through the function when it is evoked
      A. Example: 
*/    function funNumber(num) {
    console.log("number " + num + "is a fun number!");
}      
    funNumber(10); //10 is the argument we pass into the function.

/** 
* 7. Declaring a function does not execute the function.  You must call a function to execute it. calling a 
*    function performs the task that you want the function to do. You call a function by using the 
*    function name (see abobe example).  If you don't call a function, the fuction will do anything. 
*       A.. The () operator, plus the name of the funciton, invokes the function.
    A. *You can OPTIONALLY use return within a function to get an "answer".  A function DOES NOT NEED a return*
        1.Returns can only be used within the body of the function (within the curly brackets{}).

 8. The syntax for named functions is that named functions are binded to the the surrounding environment.  
 9.It is always best practice to name your functions. (You can also have annonomous funcionts with no name).

 10. Conversely, We can assign a function to a variable.
    A. var cat = function catType(breed){
        //block of code to execute
                } 
        
  11. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
     A. How do we specify inputs?- Inputs are the paramaters within the parenthese.  We can add inputs within a function.
            1. example: function animalsType(breed, size) 'breed' and 'size' are the inputs, or parameters. 
     B. Variables used within a function are local, meaning they can be accessed within the function but the 
        parent scope cannot access them.
    C.  How do we specify outputs? - Outputs are the final result of the given function
        1. example
**/              var x = myFunction(3, 4);
                  function myFunction(a, b) {
                       return a + b;
                    } //the output will be 7  because the function adds a (3) + b (4) = 7
                    

/**  12. Scope: Scopes are blocks of code.  We have the global (or parent) scope, and the local (or child) scope.
         A. The children scopes have access to the parent scope but parent scopes do not have access to children scopes.
            1. Example: 
*/               var x = 4 //---> global (parent) scope
                function fullName () {
                   // local (child) scope
                 } 
                // back in global scope
//           2.
            var x = 4;  //global scope
            function numbers(y) {
              return x + y // child scope
            }
            numbers(5)  //global
/**    13. Closures: Functions form closures around the data they house. If an object returned from the Function 
        and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to 
        exist in these closures! A closure is a function having access to the parent scope, even after the 
        parent function has closed.
            A. Nested functions (functions within functions) form closures.
                1. "A closure is created when the inner function is somehow made available to any
                    scope outside the outer function." -MDN website
                2. Example from W3 website
*/                var add = (function () {
                  var counter = 0;
                    return function () {counter += 1; return counter};
                    })();
                    add();
                    add();
//                3. example:
                   var secretAnimalNoise = (function() {
                        var noise = 'naaaaay'
                        return function() {
                            return noise;
                        }
                    })();
                    secretAnimalNoise();
                    // the counter is now 3.  There is a function within the function and each time you call add(), it runs 
                   // the inner function. 
            //Another example from MDN website
                function makeFunc() {
                     var name = 'Mozilla';
                        function displayName() {
                            return name;
                     }
                         return displayName;
                    }
                    var myFunc = makeFunc();
                    myFunc();
            // "the displayName() inner function is returned from the outer function before being executed.
            //    The reason is that functions in JavaScript form closures."
            // Another example from MDN for closures
                    var pet = function(name) {   // The outer function defines a variable called "name"
                    var getName = function() {
                     return name;    // The inner function has access to the "name" variable of the outer 
                             //function
                        };
                     return getName; // Return the inner function, thereby exposing it to outer scopes
                        };
                    let myPet = pet('Vivie');
                    myPet(); // Returns "Vivie"
                    
//    14.  Random note:  You can use loops within a function
