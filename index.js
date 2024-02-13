import inquirer from "inquirer";
let todolist = ['praying namaz', 'breakfast', 'go to college', 'lunch', 'go to academy', 'dinner', 'dinner', 'sleep'];
async function askoption() {
    const asked = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'choose any Option',
            choices: ['Add Todo', , 'Remove Todo', 'Update Todo', 'Display Todo list']
        },
    ]);
    switch (asked.choice) {
        case 'Add Todo':
            addingTodo();
            break;
        case 'Remove Todo':
            removingTodo();
            break;
        case 'Update Todo':
            updatingTodo();
            break;
        case 'Display Todo list':
            displayingTodo();
            break;
        default:
            console.log('Invalid choice');
    }
}
async function addingTodo() {
    const { newTodo } = await inquirer.prompt({
        type: 'input',
        name: 'newTodo',
        message: 'Enter a task to add',
        when: (answers) => answers.newTodo === 'Add Todo',
    });
    todolist.push(newTodo);
    console.log("Task added successfully");
    askoption();
}
async function removingTodo() {
    const { removedTodo } = await inquirer.prompt({
        type: `list`,
        name: "RemoveTodo",
        message: "Which todo you want to Remove",
        choices: ['praying namaz', 'breakfast', 'go to college', 'lunch', 'go to academy', 'dinner', 'dinner', 'sleep'],
        when: (answers) => answers.removetodo === 'Remove Todo',
    });
    const index = todolist.indexOf(removedTodo);
    todolist.splice(index, 1);
    console.log("Task removed Successfully!");
    askoption();
}
async function updatingTodo() {
    const { originalTood, newTodo } = await inquirer.prompt([
        { type: 'list',
            name: 'originalTodo',
            message: 'Choose the task to update',
            choices: ['praying namaz', 'breakfast', 'go to college', 'lunch', 'go to academy', 'dinner', 'dinner', 'sleep'],
            when: (answers) => answers.choice === 'Update Todo',
        },
        {
            type: 'input',
            name: 'newTodo',
            message: 'Enter the new task'
            // type : 'input',
            // name : 'newTodo',
            // message : 'Choose the task to update',
            // choices : ['praying namaz', 'breakfast', 'go to college', 'lunch', 'go to academy', 'dinner', 'dinner', 'sleep'],
            // when: (answers) => answers.choice === 'Update Todo',}
        }
    ]);
    const index = todolist.indexOf(originalTood);
    todolist[index] = newTodo;
    console.log('task updated successfully new ');
    // asked()
    askoption();
}
async function displayingTodo() {
    console.log(`${todolist}`);
    // asked()
    askoption();
}
//asked()
askoption();
// async function addingtodo(){
//     if (asked.choices=='Add Todo'){
//         let addTodo= todolist.push(asked.choice)
//     console.log("Add Todo")
//     }
//     else {
//         console.log("Provide a Task!")
//     }
// }
// function removetodo(){
// if (asked.choices=='Remove Todo'){}
//  }
// import inquirer from "inquirer";
// let todolist = ['praying namaz', 'breakfast', 'go to college', 'lunch', 'go to academy', 'dinner', 'dinner', 'sleep'];
// async function main() {
//     const asked = await inquirer.prompt({
//         type: 'list',
//         name: 'Choice',
//         message: 'Choose any Option',
//         choices: ['Add Todo', 'Remove Todo', 'Update Todo', 'Display Todo list']
//     });
//     switch (asked.Choice) {
//         case 'Add Todo':
//             await addingTodo();
//             break;
//         case 'Remove Todo':
//             await removingTodo();
//             break;
//         case 'Update Todo':
//             await updatingTodo();
//             break;
//         case 'Display Todo list':
//             displayingTodo();
//             break;
//         default:
//             console.log('Invalid choice');
//     }
// }
// async function addingTodo() {
//     const { newTodo } = await inquirer.prompt({
//         type: 'input',
//         name: 'newTodo',
//         message: 'Enter a task to add',
//         when: (answers) => answers.Choice === 'Add Todo'
//     });
//     todolist.push(newTodo);
//     console.log("Task added successfully");
//     main();
// }
// async function removingTodo() {
//     const { removedTodo } = await inquirer.prompt({
//         type: 'list',
//         name: 'removedTodo',
//         message: 'Choose the task to remove',
//         choices: todolist,
//         when: (answers) => answers.Choice === 'Remove Todo'
//     });
//     const index = todolist.indexOf(removedTodo);
//     todolist.splice(index, 1);
//     console.log("Task removed successfully!");
//     main();
// }
// async function updatingTodo() {
//     const { originalTodo, newTodo } = await inquirer.prompt([
//         {
//             type: 'list',
//             name: 'originalTodo',
//             message: 'Choose the task to update',
//             choices: todolist,
//             when: (answers) => answers.Choice === 'Update Todo'
//         },
//         {
//             type: 'input',
//             name: 'newTodo',
//             message: 'Enter the new task',
//             when: (answers) => answers.Choice === 'Update Todo'
//         }
//     ]);
//     const index = todolist.indexOf(originalTodo);
//     todolist[index] = newTodo;
//     console.log('Task updated successfully');
//     main();
// }
// function displayingTodo() {
//     console.log('Todo List:');
//     todolist.forEach((item, index) => {
//         console.log(`${index + 1}. ${item}`);
//     });
//     main();
// }
// main();
