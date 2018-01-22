"use strict";
function lengthOfString(str1) {
    return str1.length;
} // lengthOfString()
console.log(lengthOfString("test 1"));
function lengthWithoutSpace(str1) {
    var str1NoSpace;
    str1NoSpace = str1.replace(/\s/g, '');
    return str1NoSpace.length;
} // lengthWithoutSpace()
console.log(lengthWithoutSpace("test 1"));
function lengthBoth(str1, space) {
    var num;
    if (space) {
        num = str1.replace(/\s/g, '').length;
    }
    else {
        num = str1.length;
    } // if..else
    return num;
} // lengthBoth()
console.log(lengthBoth("test 1", false));
console.log(lengthBoth("test 1", true));
console.log(lengthBoth("test 1"));
