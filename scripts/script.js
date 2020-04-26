const pauseMenu = document.getElementById('pause-menu');
const pauseMenuIcon = document.getElementById('pause-menu-icon');
const consoleWindow = document.getElementById('console-window');

// config things
let pauseMenuOpen = false;
let consoleWindowOpen = false;

// pausing the game
pauseMenuIcon.addEventListener('click', () => {
  switch(pauseMenuOpen) {
    case true:
      pauseMenu.style.display = "none";
      pauseMenuOpen = false;
    break;
    case false:
      pauseMenu.style.display = "block";
      pauseMenuOpen = true;
    break;
  }
});

window.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case escape:
      if(pauseMenuOpen) {
        pauseMenu.style.display = "none";
        pauseMenuOpen = false;
        console.log('check one is working.');
        break;
      } else {
        pauseMenu.style.display = "block";
        pauseMenuOpen = true;
        console.log('check two is working.');
        break;
      }
  }
});

// quitting the game
function quitGame() {
  window.close();
}
