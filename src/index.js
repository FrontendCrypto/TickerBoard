import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

// Importa tus módulos de JavaScript aquí
import KeyboardController from './controllers/keyboard_controller';
import SearchController from './controllers/search_controller';
import SwitchController from './controllers/switch_controller';
import CoinController from './controllers/coin_controller';

// Importa tus estilos CSS aquí
import './styles/styles.scss';

// Inicializa Stimulus
const application = Application.start();
const context = require.context('./controllers/', true, /\.js$/);
application.load(definitionsFromContext(context));
// application.debug = true