/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/**
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/** NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


4. var, let, const.  We can define a variable using var, let const.  
    A. Var- is the most flexible but consequently the most unstabele and more prone to issues.
        1. Example: var cat = "Noodle";
    B. Let- Is somewhat flexible and the value can be changed but is a little bit more stable than var and less proned to errors. 
        1. Example: let cat = "Noodles";
    C. Const: is the strictest.  It cannot be re-assigned after the initial assignment. Unlike let and var, const cannot be 
        left as 'undefined'. It will cause an error. 
    
3. Hoisting
    A.  Var is global scoped and are hoisted to the top of the page. It can be accessed before it has been defined. 
        Let and const are block scoped and are not hoisted.  They cannot be accessed until they are declared.
            1. Var is accessable in any scope if it is declared anywhere outside a function. if var is declared inside a function
                it is only accessable within that function. Var is flexible but unstable and can lead to errors or bugs in your programming.
            2. Let and const are block scoped and are ony accessable in the scope in which they are defined.
                let and const are stable and are less likely to cause errors due to them being block scoped. Let is flexible in that
                we can re-assign variables to it.  Const is not flexible because we cannot re-assign it's value.
            3. example of hoisting:
*/              var cat = 'Noodles';
                var favFood = 'tune'
                //after hoisting it will look like the code below
                var cat;
                console.log(cat); // will be undefined
                var favFood;  
                console.log(favFood); // will be undefined
                cat = 'Noodles';
                console.log(cat); // will now log 'Noodles'
                favFood ='Tuna'  
                console.log(favFood); // will now be logged as 'tuna'