import {el} from 'redom';

class RenderTomato {
    constructor() {
        this.windowTitle = el('p.window__panel-title');
        this.windowTimer = el('p.window__timer-text', '00:00');
        this.taskForm = el('form.task-form');
        this.buttonStart = el('button.button.button-primary', 'Старт');
        this.buttonStop = el('button.button.button-secondary', 'Стоп');
        this.buttonImportant = this.createButtonImportant();
        this.buttonAddTask = this.createButtonAddTask();
        this.tasksList = this.createTasksList();
        this.init();
    }

    init() {
        const header = this.createHeader();
        const main = this.createMain();

        document.body.append(header, main);
    }

    createHeader() {
        return el('header',
            el('section.header',
                el('div.container.header__container', [
                    el('img.header__logo', {
                        src: 'img/svg/noto_tomato.svg',
                        alt: 'Tomato image',
                    })
                ])
            )
        );
    }

    createMain() {
        const main = el('section.main',
            el('div.container.main__container', [
                this.pomodoroWindow(),
                this.pomodoroTasks()
            ])
        );

        return el('main', main);
    }

    pomodoroWindow() {
        return el('div.pomodoro-form.window', [
            el('div.window__panel', [
                this.windowTitle,
                el('p.window__panel-task-text', 'Томат 2')
            ]),
            el('div.window__body', [
                this.windowTimer,
                el('div.window__buttons', [
                    this.buttonStart,
                    this.buttonStop
                ])
            ]),
            this.createForm()
        ]);
    }

    createForm() {
        const inputTask = el('input.task-name.input-primary', {
            type: 'text',
            name: 'task-name',
            id: 'task-name',
            placeholder: 'название задачи',
        });

        this.taskForm.append(inputTask, this.buttonImportant, this.buttonAddTask);

        return this.taskForm;
    }

    createButtonImportant() {
        return el('button.button.button-importance.default', {
            type: 'button',
            ariaLabel: 'Указать важность',
        });
    }

    createButtonAddTask() {
        return el('button.button.button-primary.task-form__add-button',
            {
                type: 'submit',
            },
            'Добавить'
        );
    }

    pomodoroTasks() {
        const {title, text} = this.createInstruction();
        return el('div.pomodoro-tasks', [title, text, this.tasksList]);
    }

    createInstruction() {
        const title = el('p.pomodoro-tasks__header-title', 'Инструкция:');

        const text = el('ul.pomodoro-tasks__quest-list', [
            el('li.pomodoro-tasks__list-item',
                'Напишите название задачи чтобы её добавить'),
            el('li.pomodoro-tasks__list-item',
                'Чтобы задачу активировать, выберите её из списка'),
            el('li.pomodoro-tasks__list-item',
                'Запустите таймер'),
            el('li.pomodoro-tasks__list-item',
                'Работайте пока таймер не прозвонит'),
            el('li.pomodoro-tasks__list-item',
                'Сделайте короткий перерыв (5 минут)'),
            el('li.pomodoro-tasks__list-item',
                'Продолжайте работать, пока задача не будет выполнена.'),
            el('li.pomodoro-tasks__list-item',
                'Каждые 4 периода таймера делайте длинный перерыв (15-20 минут).')
        ]);

        return {title, text};
    }

    createTasksList() {
        return el('ul.pomodoro-tasks__quest-tasks');
    }

    createTask(task) {
        const taskElement = el(`li.pomodoro-tasks__list-task`, [
            el('span.count-number', `${task.task.count}`),
            el('button.pomodoro-tasks__task-text', `${task.task.title}`),
            el('button.pomodoro-tasks__task-button'),
            el('div.burger-popup ', [el('button.popup-button burger-popup__edit-button', 'Редактировать'),
                el('button.popup-button burger-popup__delete-button', 'Удалить')
            ])
        ]);
        taskElement.classList.add(task.task.importance);
        taskElement.dataset.id = task.task.id;
        //taskElement.textContent = task.title;
        this.tasksList.append(taskElement);
        //return taskElement;
    }

    setWindowTitle(title) {
        this.windowTitle.textContent = title;
    }
}

export default RenderTomato;

