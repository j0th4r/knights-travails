import './styles.css';
import { gameboard } from './gameboard';
import { uiController } from './ui-move';

// Application controller module
const appController = {
  init() {
    gameboard();
    uiController();
  }
};

// Initialize the application
appController.init();