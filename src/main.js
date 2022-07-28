import './scss/index.scss';
import './js/AddTask';
import {Tomato} from "./js/tomato";


let count = 0;
const imp = ['default', 'important', 'so-so']
document.querySelector('.button-importance').addEventListener('click', ({target}) => {
  count += 1;
  if (count >= imp.length) {
    count = 0
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i])
    } else {
      target.classList.remove(imp[i])
    }
  }
})


const tomato = new Tomato({taskTime: 10});

tomato.addTask({name: 'Выполнить 4 урок 4-го модуля'});
tomato.addTask({name: 'Добавить свойства в класс'});
tomato.addTask({name: 'Добавить методы в класс'});

tomato.activateTask(3);
// tomato.addCounter(3);
// tomato.addCounter(3);
// tomato.addCounter(3);
// tomato.addCounter(3);
// tomato.addCounter(3);

tomato.startTask();
