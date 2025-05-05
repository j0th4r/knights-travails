import './styles.css';
import { gameboard } from './gameboard';
import { knightsTravails } from './search-algo';

// Application controller module
const appController = {
  init() {
    gameboard();
    knightsTravails([3, 3], [4, 3])
  }
};

// Initialize the application
appController.init();