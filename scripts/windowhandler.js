// opening & closing the email window
emailWindowIcon.addEventListener('click', () => {
  switch(emailWindowOpen) {
    case true:
      emailWindow.style.display = "none";
      emailWindowOpen = false;
    break;
    case false:
      emailWindow.style.display = "block";
      emailWindowOpen = true;
    break;
  }
});

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
        break;
      } else {
        pauseMenu.style.display = "block";
        pauseMenuOpen = true;
        break;
      }
  }
});

// playing a click sound whenever the player clicks their mouse button
window.addEventListener('click', () => {
  clickAudio.play();
});
