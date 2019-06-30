/**                                      
* 0.CONTROL_FLOW: 
*   Control flow is the order a computer runs the informatoin provided. Loops and conditional can change the control flow.
*      A. What is control-flow?  The definition from MDN:
*           "The control flow is the order in which the computer executes statements in a script."
*               "Code is run in order from the first line in the file to the last line, unless the computer 
*               runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. "
*                "Control flow means that when you read a script, you must not only read from start to finish but also look at 
*                program structure and how it affects order of execution."

*  1. Control statements are if statements, switch statements and loops.
*      A.  If Else if statements
*           1.If, else if statements are conditionals statements that perform actions depending on each statement meets the requirments given.
                a. Example of an if, else if statement
*/                var x = 5;
                  if (x < 4) {
                    console.log("I am little");
                }
                else if (x > 4 && x < 10) {
                    console.log("I am medium");
                }
                else {
                    console.log("I am large");
                }
                //This is console.log("I am medium")
//                b. another example of an if, else statement:
                  
                 let z = 2;
                 function zFactor(num) {
                 if(num === 2) {
                    return true;
                  }
                else {
                    return false;
                } 
                }  
                zFactor(z); //returns true because z does equal 2.
/**         2. We look at the if statement and if the condition given is true it runs that block of code.
                If the condition given isn't true, it moves to the else if statement. If the else if statement
                is true it will run the block of code but if not, it moves to the else statement and automatically 
                runs that block of code. We do not need a conditional for the else statement, because as already stated, 
                it runs if none of the other condtions are true.
*     B. Switch Statements
*           1. Switch statements are similar to if, else if statements but formatted different and some times are more convienent 
*               that if, else if statements if you have a lot of conditions.  The break is to switch to next action you wish the switch 
*               statementto perform.  Default is what runs if no other conditions are true. (default is equivalent to the else in an if, else if statement.)
*                   a. Example: 
*                       1.(for examples of loops see loop section)
*                       This Function takes a fruit 
*                       If we console log with the input of a specific fruit, it will tell us the color.
*                       2 yellow fruits, 3 red fruits, 2 green fruits
*                        default is 'I love fruits
*/                       function colorOfFruits(fruits){
                        switch(fruits){
                         case 'banana':
                         case 'lemon':
                         console.log('Yellow');
                         break;
                         case 'apple':
                         case 'cherry':
                         case 'pomagranate':
                         console.log('red');
                         break;
                         case 'kiwi':
                         case 'grape':
                         console.log('green');
                         default: 
                         console.log('I love fruits');
                         break;
                         }
                    }
/**                 3. to call a function
                    colorOfFruits('banana');   should consol.log 'yellow'

*/