/**                     
 * 0.STRING MANIPULATIONS
 * 1.  String manipulations (or methods) let us work with strings and do different things to them. Usually we would not be 
 *              able to use methods or properties on a string but in javascript, strings are seen as objects so therefore we can    
 *              use several methods on strings
        A. Ways we can manipulate strings.  
      There are many different ways we can manipulate strings.  Some of these ways are:
            1. .length to find the length of a string
               a. example: 
*/               var cat = 'bobcat';
                console.log(cat.length) //will log 6 because there are 6 letters in that string.
/**            2. .slice to get part of a string (or slice the string)
                a. slice returns a new array with the selected elements.  It does not change the original array.
                    1. array.slice(start, end).  start is the starting index, where we want it to start, end is the ending index
                        a. example. 
*/                        var cat = "I am a cat"; 
                            var newCat = cat.slice(6) // newCat will now equal "cat"
                           // but 
                           var newCat = cat.slice(0, 5) //becomes "I am". 
                           var newCat = cat.slice(2, 3) //becomes "a".
 //          3. .toUpperCase/.toLowerCase will turn letters into upper or lower case
 //               a. example: 
                var cat = "I aM a CaT"; 
                console.log(cat.toLowerCase()) // logs "i am a cat";
                console.log(cat.toUpperCase()) //logs "I AM A CAT".  You can use these to do things such as capitalize the first letter of every word, etc.
//            4. .replace will replace a part of a string
//                a. string.replace(searchvalue, newvalue)
//                    1. example: 
                        var cat = "I am a cat"; 
                        var dog = cat.replace(/cat/g, 'dog');
                        console.log(dog); //logs "I am a dog".
//              5.  We can use the + operator to add, or concatenate 2 strings together.  
                console.log('Noodles' + " " + "says" + " " + "meow");
                //logs "Noodles says meow".
                
/**        B.  There are a lot of string methods.  Some more are types of string methods are: 
                indexOf(), search(), substring(), substr(), replace(), concat(), charAt().
                There are many more not listed here as well, that are all very functional and handy 
                to use when coding.  
                1. indexOf() returns the position of the first occurance of a given value when given an array. Will return -1 if value 
                    does not occur. It is case sensitive. indexOf can take a second paramater, which is a start parameter so we can 
                    tell it where to begin searching within the array. 
                    **Search() is similar to indexOf but used for strings.
                    example of search:
*/                    var sent = "I am a cat";
                    var is = sent.search('a');
                    console.log(is);//logs 2 because first orrurence of 'a' is at index 2
//                  example of indexOf
                    var sent = "I am a cat";
                    var is = sent.indexOf('a');
                    console.log(is);
                
/**                4. substring() takes a string, takes out the characterS at the specified indexed and puts them into a 
                       new substring. The parameters are (start, end).  The start parameter is required. But if you don't 
                        include the end parameter it will go until the end of the string.
                     example:
*/                        var kitty = "I am a kitty and a proud kitty";
                        var extract = kitty.substring(0, 12);
                        console.log(extract); //logs 'I am a kitty
                        var extract2 = kitty.substring(19);
                        console.log(extract2); //logs proud kitty
                    
                
//                5. substr() is similar to substring except for the end parameter is the maximum length of return. 
//                    It can also take a negative start pararamter. example:
                        var str = "I'm a cat";
                        var res = str.substr(6);
                        console.log(res); //logs 'cat'
                
//                6. replace() looks through a string for a given value and when it finds it, it returns a new string with that value
//                        replaced with another given value.  example:
                        var str2 = "I am a cat";
                        var newStr = str2.replace('cat', 'dog');
                        console.log(newStr); //takes out the word cat and now logs 'I am a dog'
                
//                7. concact() is a pure function that takes 2 or more arrays and returns a 
//                  new array with the other arrays concated (or combined). Example below:
                    var playlist = ['jingle bells', 'deck the hall'];
                    var toAdd = ['frosty the snowman', 'rudolph the red nosed reindeer'];
                    var xmasPlaylist = playlist.concat(toAdd);
                    console.log(xmasPlaylist);
//                  logs [ 'jingle bells', 'deck the hall', 'frosty the snowman','rudolph the red nosed reindeer' ]
   
//                7. charAt() returns a character at a given index of a string. example: 
                    var dog = "I am a dog";
                    var find = dog.charAt(0);
                    console.log(find);  // 'logs 'I
                    var find2 = dog.charAt(7);
                    console.log(find2); // logs 'd'
