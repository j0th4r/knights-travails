import './styles.css';
import { gameboard } from './gameboard';

// Application controller module
const appController = {
  init() {
    gameboard();
  }
};

// Initialize the application
appController.init();