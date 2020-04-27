// generating random emails
function generateEmail() {
  let author = Math.floor(Math.random() * names.length);
  let topic  = Math.floor(Math.random() * topics.length);
  let body   = Math.floor(Math.random() * bodies.length);

  // adding the email to the emails object
  emails.push({
    title: topics[topic].toString(),
    topic: topics[topic].toString(),
    author: names[author].toString(),
    body: bodies[body].toString()}
  );
  displayEmails();
}

// displaying all the emails
function displayEmails() {
  // scrolling through the emails array for information
  for(email in emails) {
    emails[email].topic.replace(' ', '-');
    emailWindowBody.innerHTML += `<tr><td class="email" onclick="displaySpecificEmail('${emails[email].title}')"><p>${emails[email].title}</p></td></tr>`;
  }
}

function displaySpecificEmail(title) {
  // scroll through to see if the email exists in the database
  for(email in emails) {
    // check to see if the title of the email is actually in the database
    if(emails[email].title === title) {
      // set everything inside of the specific email window
      specificEmailAuthor.innerHTML = `${emails[email].author}`;
      specificEmailTopic.innerHTML  = `${emails[email].topic}`;
      specificEmailBody.innerHTML   = `${emails[email].body}`;
      // set the display for the specific email window to true
      specificEmail.style.display = "block";
    }
  }
}

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

// quitting the game
function quitGame() {
  window.close();
}
