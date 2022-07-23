class AddTask {
    constructor(name, counter = 0) {
        this.name = name;
        this.counter = Number(counter);
        this.id =  Math.random().toString().substring(2, 8) + Date.now().toString().substring(9);
    }

    changeName(newName) {
        this.name = newName;
    }

    increaseCounter() {
        return this.counter ++;
    }

}


addTask = new AddTask('3 задание', 1);

console.log(addTask, ' addTask')

addTask.changeName('Новое задание');
addTask.increaseCounter();
addTask.increaseCounter();

console.log(addTask.name, ' name');
console.log(addTask.counter, ' counter');
