"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test = (function () {
    function Test() {
        this.strArray = [];
    }
    Test.prototype.addTask = function (task) {
        this.strArray.push(task);
        console.log("Pushed " + task + " into the string array.");
        return this.strArray.length;
    }; // addTask()
    Test.prototype.listAllTasks = function () {
        this.strArray.forEach(function (strArray) { console.log(strArray); });
    }; // listAllTasks
    Test.prototype.deleteTask = function (task) {
        // search from the beginning of the array
        var search = this.strArray.indexOf(task, 0);
        // if search is found, remove that element
        if (search > -1)
            this.strArray.splice(search, 1);
        // Prints message indicate deletion
        console.log("Deleted " + task + " from the string array.");
        return this.strArray.length;
    }; // deleteTask()
    return Test;
}()); // Test class
