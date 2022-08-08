import './scss/index.scss';
import './js/modules/AddTask';
import RenderTomato from "./js/modules/renderTomato";
import {Tomato} from "./js/modules/tomato";
import ControllerTomato from "./js/modules/controllerTomato";

const page = new RenderTomato();
const tomato = new Tomato(page, {});
new ControllerTomato(tomato);
