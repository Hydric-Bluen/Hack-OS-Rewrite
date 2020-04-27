// generating random emails
function generateEmail() {
  let author = Math.floor(Math.random() * names.length);
  let topic  = Math.floor(Math.random() * topics.length);
  let body   = Math.floor(Math.random() * bodies.length);
  let price  = Math.floor(Math.random() * prices.length);

  // adding the email to the emails object
  emails.push({
    title:  topics[topic].toString(),
    topic:  topics[topic].toString(),
    author: names[author].toString(),
    body:   bodies[body].toString(),
    price:  prices[price].toString(),
    accepted: false}
  );

  displayEmails();
}

// displaying all the emails
function displayEmails() {
  // clear the emailWindowBody before drawing the emails onto it
  emailWindowBody.innerHTML = '';
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
      // change the email body for a sort moment
      emails[email].body += `<button id="deny-contract" onclick="denyContract('${emails[email].title}')">Deny</button><button id='accept-contract' onclick="acceptContract('${emails[email].title}')">Accept</button>`;
      // set everything inside of the specific email window
      specificEmailAuthor.innerHTML = `${emails[email].author}`;
      specificEmailTopic.innerHTML  = `${emails[email].topic}`;
      specificEmailBody.innerHTML   = `${emails[email].body}`;
      // set the display for the specific email window to true
      specificEmail.style.display = "block";
    }
  }
}

function acceptContract() { return; }

function denyContract() { return; }

// quitting the game
function quitGame() {
  window.close();
}

function update() {
  if(!paused) {
    emailTimer -= 1;
    if(emailTimer <= 0 && emailCount < maxEmails) {
      generateEmail();
      emailCount++;
      emailTimer = 100;
    }
  }
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
