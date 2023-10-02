export class TodoList{
    constructor() {
        this.tasks = []
    }

    add(taskName){
        this.tasks.push({name: taskName, complete : false})
    }

    complete(taskName){
        const nameOfTask = this.tasks.find((task) => task.name === taskName)
        if (nameOfTask){
            nameOfTask.complete = true;
        } else {
            console.log('Task not found');
        }
    }

    displayAllTasks(){
        console.log(this.tasks); 
    }
}