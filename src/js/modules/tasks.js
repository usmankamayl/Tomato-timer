export class Task {
    constructor(task) {
        this.task = task;
        this.task.title = task.title;
        this.task.id = task.id;
        this.task.count = task.count;
        this.task.importance = task.importance || 'so-so';
    }
}


export class StandardTask extends Task {
    constructor(task) {
        super(task);
        this.task.importance = 'default';
    }
}

export class ImportantTask extends Task {
    constructor(task) {
        super(task);
        this.task.importance = 'important';
    }
}

export class UnimportantTask extends Task {
    constructor(task) {
        super(task);
        this.task.importance = 'so-so';
    }
}
