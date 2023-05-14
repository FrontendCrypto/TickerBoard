import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

// Importa tus módulos de JavaScript aquí
import KeyboardController from './keyboard/keyboard_controller';
import NotchController from './keyboard/notch_controller';
import SearchController from './keyboard/search_controller';
import SwitchController from './helpers/switch_controller';

// Importa tus estilos CSS aquí
import './styles/styles.scss';

// Inicializa Stimulus
const application = Application.start();
const context = require.context('./', true, /\.js$/);
application.load(definitionsFromContext(context));

// Crea una instancia del controlador
const myController = application.getControllerForElementAndIdentifier(document.body, 'my-controller');
if (myController) {
  myController.connect();
}
