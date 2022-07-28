export class Tomato {

    tasks = [];
    constructor(obj) {
        this.obj = obj;
        this.obj.taskTime = obj.taskTime || 25 ;
        this.obj.pause = obj.pause || 5;
        this.obj.bigPause = obj.bigPause || 15;
        console.log(this);
    }

    addTask (task) {
        this.tasks.push(task);
        task.id = this.tasks.indexOf(task) + 1;
        console.log(`задача '${task.name}' добавлена,  id задачи = ${task.id}`)
    }

    activateTask (id) {
        this.tasks.find(task => task.id = id).status = true;
        console.log(`задача по id = ${id} активирована`);
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
        console.log(task.counter, '  task.counter');
    }
}
