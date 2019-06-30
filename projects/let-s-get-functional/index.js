// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-joypalumbo");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    const males = _.filter(array, function(person, index, array) {
        if (person.gender === 'male') {
            return true;
        }
    });
    return males.length;
};

var femaleCount = function(array) {
    const females = _.reduce(array, function(prev, array) {
        if (array.gender === 'female') {
            prev.push(array.gender);
        }
        return prev;
    }, []);
    return females.length;
};

var oldestCustomer = function(array) {
    var oldest = _.reduce(array, function(prev, current, array) {
        if (prev.age > current.age) {

        }
        else {
            prev = current;
        }
        return prev;
    });
    return oldest.name;
};

var youngestCustomer = function(array) {
    var youngest = _.reduce(array, function(prev, current, array) {
        if (prev.age < current.age) {

        }
        else {
            prev = current;
        }
        return prev;
    });
    return youngest.name;
};

var averageBalance = function(array) {
    var balance = _.reduce(array, function(prev, current) {
        var newCur = Number(current.balance.replace(/\$|,/g, ''));
        prev = prev + newCur;
        return prev;
    }, 0);
    return balance / array.length;
};

var firstLetterCount = function(array, letter) {
    var firstLetter = _.filter(array, function(element, index, array) {
        return element.name[0].toLowerCase() === letter.toLowerCase();
    });
    return firstLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    return _.filter(array, function(element, index, array) {
        return element.name === customer;
    })[0].friends.filter(function(friend) {
        return friend.name[0].toLowerCase() === letter.toLowerCase();

    }).length;
};

var friendsCount = function(array, name) {
    //loop through the array of people
    //access the friends array
    //within that friends array we must access the name object
    //then compare each name in the name object to the given name
    //doyle and doris are friends with olga
    // var customerFriend = 
    let friendList = [];

    _.each(array, function(cust, index, array) {
        _.each(cust.friends, function(friend, index, array){
            if(friend.name === name){
            friendList.push(cust.name);
            }
        });
    });
    return friendList; 
        
        
        // let friendList = element.friends;
        //friendsLIst is an array of objects.
        // console.log(friendList);
    // }).filter(function(friend) {
    //     //  console.log(friend.name);
    //     // console.log(friendList[index].name.toLowerCase());
    //     return friend.name === name;
    // }).map(function(person) {
    //     return person.name;
    // });

};

var topThreeTags = function(array) {
    let tagCount = _.reduce(array, function(count, customer) {
        _.each(customer.tags, function(tag) {
            if (count[tag]) {
                count[tag]++;
            }
            else {
                count[tag] = 1;
            }
        });
        return count;
    }, {});
    tagCount = _.map(tagCount, function(count, key) {
        return [key, count];
    });
    tagCount.sort(function(a, b) {
        //could also do b[1] - a[1]; short cut
        if (a[1] > b[1]) {
            return -1;
        }
        if (a[1] < b[1]) {
            return 1;
        }
        else {
            return 0;
        }
    });
    tagCount = tagCount.slice(0, 3);
    return _.map(tagCount, tag => tag[0]);

    //     var topThreeTags = [];
    //     var allTags = [];
    //     var tagsCounted = {};
    //     var sortedTags = [];
    //     var maxValue = 0;
    //     var curCustTag;
    //   _.each(array, function(element, index, array) {
    //          curCustTag = element.tags;
    // //         // prevTags.push(element.tags[index]);
    //     //   console.log(curCustTag);

    //   }).each(curCustTag, function(person, index, array) {
    //     //   console.log(person[index]);
    //         allTags.push(person[index]);
    //         // console.log(allTags);

    // }).reduce(allTags, function(tagCount, i) {
    //   	if (tagCount.hasOwnProperty(i) === true){
    // 				tagsCounted[i]++;
    // 			} else {
    // 				tagsCounted[i] = 1;
    // 			}
    // // 			console.log(tagsCounted);
    // 			return tagsCounted;
    // 		},tagsCounted).map(tagsCounted, function(value, key, obj) {
    //     if(value >= maxValue) {
    //         sortedTags.unshift(key);
    //         maxValue = sortedTags;
    //     }
    //     else {
    //         sortedTags.push(key);
    //     }
    //     topThreeTags = _.first(sortedTags, 3);
    //     return topThreeTags;
    // });

    //     // }).filter(array, function(element, index, array){

    //     // })

    //     // reduce(array, function(prev, cur, array) {
    //     //     if()
    //     //   _.filter(array, function(element, index, array) {
    // //       var tagsArr = element.tags;
    // //       return tagsArr;
    // //     });


    //     // console.log(prev.tags);
    // // });
};



var genderCount = function(array) {
    let gender = {
        male: 0,
        female: 0,
        transgender: 0
    };
    return _.reduce(array, function(prev, cur) {
        if (cur.gender === 'female') {
            gender.female += 1;
        }
        if (cur.gender === 'male') {
            gender.male += 1;
        }
        if (cur.gender === 'transgender') {
            gender.transgender += 1;
        }

        return gender;
    }, 0);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
