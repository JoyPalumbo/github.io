//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr =[];
    for(let key in object) {
         arr.push(object[key]);
    }
    return arr;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var newArr = [];
    // for(let key in object) {
    // var newArr = Object.keys(object);
    for(let key in object) {
        newArr.push(object[key]);
    }
  
   return newArr.join(' ');
  
    // return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
    var arr = [];
    var newArr = [];
    for(let key in object) {
        newArr.push(object[key]);
    }
    // var newArr = Object.values(object);
    console.log(newArr);
    for(var i = 0; i < newArr.length; i++){
        if(typeof newArr[i] === 'string') {
        arr.push(newArr[i]);
        }
    }
    return arr.join(' ');
}
// function valuesToString(object) {
//     var arr = [];
    
//     var newArr = Object.values(object);
//     for(var i = 0; i < newArr.length; i++){
//         if(typeof i === 'string') {
//         arr.push(i);
//         }
//     }
//     return arr.join(' ');
   
    
// }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    }
    else {
        return 'object';
    }
    // if(typeof collection === 'object') {
    //     return 'object';
    // }
    // else {
    //     return 'array';
    // }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var newString = object.name.charAt(0).toUpperCase() + object.name.slice(1)
 return 'Welcome ' + newString + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var str1 = object.name.charAt(0).toUpperCase() + object.name.slice(1);
var str2 = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return str1 + " is a " + str2;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 for (var key in object) {
     if(object[key] === object.noises && object.noises.length > 0) {
        //  var newArr = object.noise;
        return object.noises.join(' ');
     }
     
 }
         return 'there are no noises';
     
    //  if(Array.isArray(key) === 'noises')
 
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if(string.includes(word)){
    return true;
}
else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  if(!object.friends) {
      object.friends = [];
  }
   object.friends.push(name);

   return object;}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
      var friendArray = object.friends;
    // console.log(obj2);
    // for(var i = 0; i < friendObj.length; i++) {
    //   console.log(friendObj[i]);
    
    //  if(friendObj[i] === name) {
    //     return true;
    // }
    if(friendArray === undefined) {
        return false;
    }
    else if (friendArray.includes(name)) {
      return true;
    }
    
        return false;

    // for(var i = 0; i < object.friends.length; i++) {
    // var obj = object.friends;
    // for(var i = 0; i < obj.length; i++) {
    //  if(obj[i] === name) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    // }
    
    // }
//     if(name !== object.friends) {
//         return false;
// }
// else {
//     return true;
// }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var newList = [];
// // // var friendsList =

  for(var i = 0; i < array.length; i++) {
    var newFriend = array[i].friends;
    console.log(newFriend);
    if(!newFriend.includes(name) && array[i].name !== name) {
      newList.push(array[i].name);

    }
  }
  return newList;
}
    //array is an array of objects
    //each object has a friend key
    //check to see if 'name' is in each person's friends list
    
// var newList = [];
// // // var friendsList =
// for(var i = 0; i < array.length; i++) {
//     if(array[i].friends.hasOwnProperty(name)) {
//       return array;
//       } 
//       else {
//         newList.push(array[i].name);
//         // return newList;
//       }
//   } 
//   return newList;
//     var eachFriend = array[i].friends;
//   if(!eachFriend.hasOwnProperty(name)) {
//       newList.push(array[i].name);
//       return newList;
//     } 
//     else {
//       return array;
//     }

    // var nF = array[i].friends;
    // console.log(i);
//   if(array[i].friends !== (name) && array[i].name !== (name)) {
//         newList.push(name);
//     } 
    // else {
    //  newList.push(name);
    // } 
    // else {
    //  newList.push(name);
    // } 


// if(friendsList.length > -1) {
//         newList.push(name);
//     }
// }
    
        // return false;
// newList.push();
// }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // var newArr = object[key];
    // if(object.hasOwnProperty(key)){
    //   return newArr.push(value);
    // }
    // return object[key] = value;

     if(object.hasOwnProperty(key)) {
      object[key] = value;
     
     }
     else {
    object[key] = value; 
  
     }
     return object;
}
     
// if(!object[key]) {
//       object[key] = value;
// }
// else {
//     object[key] = value;
// }
// }



//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
   for(let key in object) {
    // console.log(object[key] + 'here');
    // console.log(key + 'here');
        if(array.includes(object[key]) || array.includes(key)) {
      delete object[key];
        }
     }
}
//      for(let key in object) {
//     if(array.hasOwnProperty(object[key]) || array.hasOwnProperty(key)) {
//       delete object.key;
//     }
//   }
// }
//     for(var i = 0; i < array.lenth; i++) {
//         var key = object.key;
//         // if(object[key] === array[i] || key === array[i]) {
//         if(array[i].hasOwnProperty(object[key]) || array[i].hasOwnProperty(key)){
//             delete object.key;
// }
// }



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let arr = [];
    for(var i = 0; i < array.length; i++) {
        // if(array[i] === i)
        if(arr.indexOf(array[i]) < 0) {
            arr.push(array[i]);
        }    
        
    }
    return arr;
    //index of and push anything that is less than 0 into empty array
    // let obj = {};
    // let arr = [];
//   array.forEach(function(i) {
//     if(!obj[i]) {
//       obj[i] = true;
//     }
//   });
//   return Object.keys(obj);
    // arr.push(Object.keys(obj));
  
//     for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].replace(/"/g, "");
}
    // return arr;

// var newArr = array.filter(function (array, index) {
// 	return array.indexOf(array) === index;
// });


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}