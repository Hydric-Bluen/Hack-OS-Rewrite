// generating random emails
function generateEmail() {
  let author = Math.floor(Math.random() * names.length);
  let topic  = Math.floor(Math.random() * topics.length);
  let body   = Math.floor(Math.random() * bodies.length);
  let price  = Math.floor(Math.random() * prices.length);

  // adding the email to the emails object
  emails.push({
    title:    topics[topic].toString(),
    topic:    topics[topic].toString(),
    author:   names[author].toString(),
    body:      bodies[body].toString(),
    price:    prices[price],
    accepted: false
  });

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

// displaying specific email content
function displaySpecificEmail(title) {
  // scroll through to see if the email exists in the database
  for(email in emails) {
    // check to see if the title of the email is actually in the database
    if(emails[email].title === title) {
      // reset the body html before writing to it
      specificEmailBody.innerHTML = ``;
      // set everything inside of the specific email window
      specificEmailAuthor.innerHTML = `${emails[email].author}`;
      specificEmailTopic.innerHTML  = `${emails[email].topic}`;
      specificEmailBody.innerHTML   = `${emails[email].body} <p>${emails[email].price}</p>
      <button id='accept-contract' onclick="acceptContract('${emails[email].title}', '${emails[email].author}', ${emails[email].price})">Accept</button>
      <button id="deny-contract" onclick="denyContract('${emails[email].title}', '${emails[email].author}', ${emails[email].price})">Deny</button>`;
      // set the display for the specific email window to true
      specificEmail.style.display = "block";
    }
  }
}

// accepting contracts
function acceptContract(title, author, price) {
  // scroll through the emails object
  for(email in emails) {
    // check to see if the title of the email is actually in the database
    if(emails[email].title === title && emails[email].author === author && emails[email].price === price) {
      // push the email to the acceptedEmails array
      acceptedEmails.push({
        title:  emails[email].title,
        topic:  emails[email].topic,
        author: emails[email].author,
        body:   emails[email].body,
        price:  emails[email].price,
      });
      // erase the email from the emails array
      emails.splice(emails[email], 1);
      emailCount--;
      // hide the specific email window
      specificEmail.style.display = "none";
      // redrawing the emails to the emails body
      displayEmails();
    }
  }
}

// refusing contracts
function denyContract(title, author, price) {
  // scrolling through the emails array
  for(email in emails) {
    // checking if the email exists in the array
    if(emails[email].title === title && emails[email].author === author && emails[email].price === price) {
      // removing the email from the array
      emails.splice(emails[email], 1);
      emailCount--;
      // hiding the specific email window
      specificEmail.style.display = "none";
      // redrawing all of the emails
      displayEmails();
    }
  }
}

// cancelling contracts
function cancelContract(title, author, price) { return; }

// quitting the game
function quitGame() {
  window.close();
}

function update() {
  if(!paused) {
    if(emailCount < maxEmails) {
      emailTimer -= 1;
    }
    if(emailTimer <= 0) {
      generateEmail();
      emailCount++;
      emailTimer = 100;
    }
  }
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
