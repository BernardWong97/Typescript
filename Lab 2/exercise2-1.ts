import {Task} from "./exercise2";

class Test implements Task{
    strArray: Array<string> = [];
    arrayLength: number;

    addTask(task: string): number{
        this.strArray.push(task);
        console.log(`Pushed ${task} into the string array.`)
        return this.strArray.length;
    } // addTask()

    listAllTasks(): void{
        this.strArray.forEach(function(strArray){console.log(strArray)})
    } // listAllTasks

    deleteTask(task: string): number{
        // search from the beginning of the array
        let search: number = this.strArray.indexOf(task, 0);

        // if search is found, remove that element
        if(search > -1)
            this.strArray.splice(search, 1);

        // Prints message indicate deletion
        console.log(`Deleted ${task} from the string array.`)

        return this.strArray.length;
    } // deleteTask()
} // Test class