export interface Task{
    // Variables
    strArray: Array<string>;

    // Functions
    addTask(str: string): number;
    listAllTasks(): void;
    deleteTask(str: string): number;
} // Task interface

