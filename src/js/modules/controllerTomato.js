import {CreateTask} from "./commands";

class ControllerTomato {
    importance;
    countImportance = 0;
    importanceList = ['default', 'so-so', 'important'];
    constructor(tomato) {
        this.tomato = tomato;
        this.btnAddTask = document.querySelector('.task-form__add-button');
        this.taskTitle = document.querySelector('.task-name');
        this.taskImportance = document.querySelector('.button-importance');
        this.init();
    }

    init() {
        this.btnAddTask.addEventListener('click', e => {
            e.preventDefault();
            this.renderTask();
        });

        document.querySelector('.pomodoro-tasks__quest-tasks').addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('pomodoro-tasks__task-text')) {
                this.tomato.activateTask(+target.closest('.pomodoro-tasks__list-task').
                    dataset.id);
            }
            if (target.closest('.burger-popup__delete-button')) {
                this.tomato.tasks.forEach((task, i) => {
                    if (task.id === target.closest('.pomodoro-tasks__list-task').dataset.id) {
                        this.tomato.tasks.splice(i, 1);
                    }
                })
                target.closest('.pomodoro-tasks__list-task').remove();
            }


            if (target.closest('.pomodoro-tasks__task-button')) {
                target.nextSibling.classList.add('burger-popup_active');
            }

        });

       this.setImportance();

    }


    setImportance() {

        this.taskImportance.addEventListener('click', (e) => {
            this.taskImportance.classList.remove(this.importanceList[this.countImportance])
            this.countImportance++;
            if (this.countImportance === 3) {
                this.countImportance = 0;
            }

            this.taskImportance.classList.add(this.importanceList[this.countImportance]);

        })
        return this.importance;
    }

t
    renderTask() {
        this.tomato.addTask(new CreateTask({
            title:  this.taskTitle.value,
            importance: this.importanceList[this.countImportance],
            count: this.tomato.tasks.length + 1,
        }
        ).execute());
    }

}

export default ControllerTomato;
