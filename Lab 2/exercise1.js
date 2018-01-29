"use strict";
var stringArr = [];
var arrayLength;
function addTask(task) {
    stringArr.push(task);
    console.log("Pushed " + task + " into the string array.");
    return stringArr.length;
} // addTask()
addTask("Task 1");
addTask("Task 2");
addTask("Task 3");
addTask("Task 4");
arrayLength = addTask("Task 5");
console.log("The array length is " + arrayLength);
function listAllTasks() {
    var task;
    // itereate the array
    for (var _i = 0, stringArr_1 = stringArr; _i < stringArr_1.length; _i++) {
        task = stringArr_1[_i];
        console.log(task);
    }
} // listAllTasks
listAllTasks();
function deleteTask(task) {
    // search from the beginning of the array
    var search = stringArr.indexOf(task, 0);
    // if search is found, remove that element
    if (search > -1)
        stringArr.splice(search, 1);
    // Prints message indicate deletion
    console.log("Deleted " + task + " from the string array.");
    return stringArr.length;
} // deleteTask()
deleteTask("Task 2");
arrayLength = deleteTask("Task 3");
console.log("The array length is " + arrayLength);
listAllTasks();
