export class Tomato {
    tasks = [];
    constructor(page, obj) {
        if (Tomato._instance) {
            return Tomato._instance;
        }
        this.obj = obj;
        this.obj.taskTime = obj.taskTime || 25 ;
        this.obj.pause = obj.pause || 5;
        this.obj.bigPause = obj.bigPause || 15;
        this.page = page;
        Tomato._instance = this;
    }

    addTask (task) {
        this.tasks.push(task);
        console.log(task, ' added task');
        console.log(this.tasks, ' tasks')
        this.page.createTask(task);
    }

    activateTask (id) {
        const activateTask = this.tasks.find(task => +task.task.id === id);
        console.log(this.tasks, ' this.tasks');
       console.log(activateTask, ' activateTask')
        activateTask.task.status = true;
        this.page.setWindowTitle(activateTask.task.title);
    }

    startTask () {
        try {
            const task = this.tasks.find(task => task.status === true);
            if (task) {
                console.log(`Выполняется задача id = ${task.id}`);
                this.addCounter(task.id);
                if (task.counter % 3 === 0) {
                    setTimeout(() => {
                        console.log(`Выполнена задача id = ${task.id}, перерыв ${this.obj.bigPause} минут`);
                        setTimeout(() => console.log(`пауза ${this.obj.bigPause} минут прошла`), 15000);
                    }, 10000);

                } else {
                    setTimeout(() => {
                        console.log(`Выполнена задача id = ${task.id}, перерыв ${this.obj.pause} минут`);
                        setTimeout(() => console.log(`пауза ${this.obj.pause} минут прошла`), 5000);
                    }, 10000);
                }

            } else throw new Error('У вас нет активных задач');
        } catch (err) {
            console.log(err.message);
        }

    }

    addCounter (id) {
        const task = this.tasks.find(task => task.id === id);
        task.counter ? task.counter += 1 : task.counter = 1;
    }
}
