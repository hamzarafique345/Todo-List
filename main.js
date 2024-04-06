import inquirer from "inquirer";
let Todolist = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            message: "Enter your new task",
            name: "task",
            type: "input"
        }
    ]);
    Todolist.push(addtask.task);
    console.log(`${addtask.task}: Your task is added successfully`);
    let addmore = await inquirer.prompt([
        {
            message: "Do you want more task?",
            type: "confirm",
            name: "addtask",
            default: "false"
        }
    ]);
    condition = addmore.addtask;
}
console.log(`[${Todolist}]: Your list is updated is successfully.`);
