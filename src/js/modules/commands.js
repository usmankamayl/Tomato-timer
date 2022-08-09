import {StandardTask, ImportantTask, UnimportantTask} from "./tasks";

export class Commands {
    constructor(task) {
        this.task = task;
    }

    execute() {
        throw new Error('Error!');
    }
}

export class CreateTask extends Commands {
    constructor(task) {
        super(task);
        this.task.importance = task.importance;
    }
    execute() {
        if (this.task.importance === 'important') {
            return new ImportantTask(this.task);
        }

        if (this.task.importance === 'so-so') {
            return new UnimportantTask(this.task);
        }

        return new StandardTask(this.task);
    }
}
