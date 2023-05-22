import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

// Importa tus módulos de JavaScript aquí
import KeyboardController from './controllers/keyboard_controller';
import SearchController from './controllers/search_controller';
import SwitchController from './controllers/switch_controller';
import CoinController from './controllers/coin_controller';
import ContentController from './controllers/content_controller';
import ChartController from './controllers/chart_controller';
import CurrencySelector from './controllers/currency-selector_controller';
// import ActionsController from './controllers/actions_controller'

// Import third party
// import Chart from 'stimulus-chartjs'

// Importa tus estilos CSS aquí
import './styles/styles.scss';

// Inicializa Stimulus
const application = Application.start();
const context = require.context('./controllers/', true, /\.js$/);
application.load(definitionsFromContext(context));
// application.register('chart', Chart)
// application.debug = true
