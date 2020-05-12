// opening the wpa 1 wifi cracker window
wpaOneCrackerIcon.addEventListener('click', () => {
  switch(wpaOneCrackerOpen) {
    case true:
      wpaOneCrackerWindow.style.display = "none";
      wpaOneCrackerOpen = false;
    break;
    case false:
      wpaOneCrackerWindow.style.display = "block";
      wpaOneCrackerOpen = true;
    break;
  }
});

// opening the drop down menus
function showDropDown(value) {
  switch(value) {
    case 'public-domain':
      switch(publicDomainDropDownOpen) {
        case true:
          publicDomainDropDown.style.display = "none";
          publicDomainDropDownOpen = false;
        break;
        case false:
          publicDomainDropDown.style.display = "block";
          wpaOneDropDown.style.display = "none";
          wpaTwoDropDown.style.display = "none";
          wpaOneDropDownOpen = false;
          wpaTwoDropDownOpen = false;
          publicDomainDropDownOpen = true;
        break;
      }
    break;
    case 'wpa-1':
      switch(wpaOneDropDownOpen) {
        case true:
          wpaOneDropDown.style.display = "none";
          wpaOneDropDownOpen = false;
        break;
        case false:
          wpaOneDropDown.style.display = "block";
          publicDomainDropDown.style.display = "none";
          wpaTwoDropDown.style.display = "none";
          wpaOneDropDownOpen = true;
          publicDomainDropDownOpen = false;
          wpaTwoDropDownOpen = false;
        break;
      }
    break;
    case 'wpa-2':
      switch(wpaTwoDropDownOpen) {
        case true:
          wpaTwoDropDown.style.display = "none";
          wpaTwoDropDownOpen = false;
        break;
        case false:
          wpaTwoDropDown.style.display = "block";
          wpaOneDropDown.style.display = "none";
          publicDomainDropDown.style.display = "none";
          publicDomainDropDownOpen = false;
          wpaOneDropDownOpen = false;
          wpaTwoDropDownOpen = true;
        break;
      }
    break;
  }
}

// opening the wifi connections window
wifiConnectionsIcon.addEventListener('click', () => {
  switch(wifiConnectionsOpen) {
    case true:
      wifiConnectionsWindow.style.display = "none";
      publicDomainDropDown.style.display = "none";
      wpaOneDropDown.style.display = "none";
      wpaTwoDropDown.style.display = "none";
      passwordInputWindow.style.display = "none";
      wifiConnectionsOpen = false;
      passwordInputOpen = false;
      publicDomainDropDownOpen = false;
      wpaOneDropDownOpen = false;
      wpaTwoDropDownOpen = false;
    break;
    case false:
      wifiConnectionsWindow.style.display = "block";
      wifiConnectionsOpen = true;
    break;
  }
});

// opening the day jobs window
dayJobIcon.addEventListener('click', () => {
  switch(dayJobWindowOpen) {
    case true:
      dayJobWindow.style.display = "none";
      dayJobWindowOpen = false;
      specificDayJobWindow.style.display = "none";
    break;
    case false:
      dayJobWindow.style.display = "block";
      dayJobWindowOpen = true;
    break;
  }
});

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
        optionsMenuOpen = false;
        optionsMenu.style.display = "none";
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

// opening the options window
function showOptionsWindow() {
  if(optionsMenuOpen) {
    optionsMenu.style.display = 'none';
    optionsMenuOpen = false;
  } else {
    optionsMenu.style.display = "block";
    optionsMenuOpen = true;
  }
}

// quitting the game
function quitGame() {
  window.close();
}


// playing a click sound whenever the player clicks their mouse button
window.addEventListener('click', () => {
  clickAudio.play();
});
