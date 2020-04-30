// opening & closing the email window
emailWindowIcon.addEventListener('click', () => {
  switch(emailWindowOpen) {
    case true:
      emailWindow.style.display = "none";
      emailWindowOpen = false;
      specificEmail.style.display = "none";
    break;
    case false:
      emailWindow.style.display = "block";
      emailWindowOpen = true;
      newEmails = 0;
    break;
  }
});

// opening and closing the console window
consoleWindowIcon.addEventListener('click', () => {
  switch(consoleWindowOpen) {
    case true:
      consoleWindow.style.display = "none";
      consoleWindowOpen = false;
    break;
    case false:
      consoleWindow.style.display = "block";
      consoleWindowOpen = true;
    break;
  }
});

// opening and closing the shop window
shopWindowIcon.addEventListener('click', () => {
  switch(shopWindowOpen) {
    case true:
      shopWindow.style.display = "none";
      shopWindowOpen = false;
    break;
    case false:
      shopWindow.style.display = "block";
      shopWindowOpen = true;
    break;
  }
});

// pausing the game
pauseMenuIcon.addEventListener('click', () => {
  switch(pauseMenuOpen) {
    case true:
      pauseMenu.style.display = "none";
      pauseMenuOpen = false;
      paused = false;
    break;
    case false:
      pauseMenu.style.display = "block";
      pauseMenuOpen = true;
      paused = true;
    break;
  }
});

window.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case escape:
      if(pauseMenuOpen) {
        pauseMenu.style.display = "none";
        pauseMenuOpen = false;
        paused = false;
        break;
      } else {
        pauseMenu.style.display = "block";
        pauseMenuOpen = true;
        paused = true;
        break;
      }
  }
});

// playing a click sound whenever the player clicks their mouse button
window.addEventListener('click', () => {
  clickAudio.play();
});
