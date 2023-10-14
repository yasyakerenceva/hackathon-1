import './styles.css'

import { BackgroundModule } from './modules/background.module';
const backgroundModule = new BackgroundModule('random-background', 'Случайный фон');
backgroundModule.trigger();