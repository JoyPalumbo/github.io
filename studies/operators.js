/***
 * Operators: Operators are used to assign or compare values.  They are also used to perform arithmatic. 
 *
 * 1.The symbols used for operators are +,-, *, / =, %, ++, --.
 * 2. There are 6 main operator types: assignment, arithmetic, comparison, logical, unary and ternary.
 *        A. Assignment operators are used to assign value. 
 *          1. Symbols used for assignment operators are =, +=,-=, *=, /=, %=.
 *              a. example: 
 */
            let x = 2 //(the = means equals to, x equals 2.  We are giving x the value of 2)
 /**              b example: x += y is the same as x = x + y (same goes for -=, *=, /=, %/)
 *       B. Arithmetic operator are used to do arithmetic such as adding, subtracting, multiplying and dividing. 
           1. The symbols we use in Javascript for arithmatic operators are +, -, *, /, %, ++, --.
                a. example: 
*/                let xyz = 4; 
                    let y = 3;
                    let add = x + y; // (let add is 7) 
/**        C. Comparison operators are used to establish if something is true or false.
            1. The symbols used for comparison operators are ==, ===, !=, !==, <, >, <=, >=, 
                a. == means loosely equal to, where as === means strickly equal to.
                    1. example:  
*/                    x = '5'; 
                        x == 5; //= true; 
                        x === 5; //false. 
/**               b. != means not equal to(loosely), and !== strickly does not equal to.
                    1. example: !true returns false; !5 returns false; 
                c. example:
                var x =  2 > 5 //returns false.
                var y 2 > 1 // returns true.
        D. Logical operators are used to see logic between values.
            1. Symbols used for logical operators are &&, ||, !
                a: && = and, || = or, ! = not
                b. example:if x = 2 and y = 4 we can say (x = 2 && y = 4) returns true but
                    if we say (x = 2 && y = 2) it would return false because BOTH have to be true
                    whereas if we say (x = 2 || y = 2) this would return true because ONLY ONE has to be true.
                c. example of &&:
*/             
                var xc = 2; 
                var yc = 3;
                if(x % 2 === 0 && y % 2 === 0) {
                    return true;
                } 
                else {
                    return false;
                } // this would return false because only one is true but && requires both to be true.
             // example of ||
             
                var a = 2; 
                var b = 3;
              if(a % 2 === 0 || b % 2 === 0) {
                    return true;
                } 
                else {
                    return false;
                }  // this would return true because of || we only need one of the condtions to be true to return true.

/**        E. Unary Operators (!, typeOf, -) is an operator that takes an argument and performs an operation.
            2. Symbols used for unary operators are +, -, ++, --, !, typeof.  (There is also delete, ~ and void).
                1. + and - will turn an argument into a number.  It can turn a string, such as "4" into a number that is not a string.
                    a. example: +"4" = 4; -"4" = -4;
                2. ++ and -- increment or decriment a number
                    a. example: x = 3; x++ = 4; or x-- = 3;
                3. ! returns a boolean opposite of the argument
                    a.  x = true; !x = false;
                4. typeof will take an argumnet and return a string, indicating what the argument is.
                    a. 
*/                  let cat = 'Noodles';
                    let x2 = 2;
                    console.log(typeof(x2));     //will log 'string'
                    console.log(typeof(cat));  //will log 'number'
/**        D. Ternary operator (a ? b : c) are used to compare based on a condition. We can use
            this as a short hand to if, else if statements.
            a: example: 
*/            if(2 > 1) {return true} else { return false } //we can re-write this as
                2 > 1 ? true: false;  //This would return true because 2 is > 1.





