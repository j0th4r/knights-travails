import { knightsTravails } from "./search-algo";
import knightImgSrc from "./assets/knight.svg"

const uiController = () => {
  const cellNodes = document.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (cellNode.querySelector("img") !== null) {
      let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
      console.log("Current knight location ", knightLocation);
    }

    cellNode.addEventListener("click", function() {
      let clickedLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
      console.log("Clicked on location ", clickedLocation);

      const cellNodes = document.querySelectorAll("td");
      cellNodes.forEach((cellNode) => {
        if (cellNode.querySelector("img") !== null) {
          let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
          console.log("Current knight location ", knightLocation);
          const knightImg = document.querySelector("img");
          knightImg.remove();
          knightsTravails(knightLocation, clickedLocation);
        }
      });

      const knightImg = document.createElement("img");
      knightImg.src = knightImgSrc;
      cellNode.appendChild(knightImg);
    });
  });
};

export { uiController };