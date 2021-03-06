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

// display shop items
function displayShopItems() {
  // clear the shopWindowTable before redrawing to it
  shopWindowTable.innerHTML = ``;
  // scrolling through the items in the shopItems array
  for(item in shopItems) {
    // checking if the item can be bought over and over
    if(shopItems[item].infinite) {
      // displaying the items
      shopWindowTable.innerHTML += `
      <tr>
        <td style="height: 12vh; position: relative;" class="item">
          <div style="text-align: left; position: absolute; left: 0%;" class="body-flex-column">
            <p id="infinite-text">${shopItems[item].name}<br>Price: $${shopItems[item].price}</p>
          </div>
          <button style="z-index: 2; position: absolute; right: 5%;" onclick="buyItem('${shopItems[item].name}')">Buy</button>
        </td>
      </tr>
      `;
    } else {
      // displaying the items
      shopWindowTable.innerHTML += `
      <tr>
        <td style="height: 12vh; position: relative;" class="item">
          <div style="text-align: left; position: absolute; left: 0%;" class="body-flex-column">
            <p>${shopItems[item].name}<br>Price: $${shopItems[item].price}</p>
          </div>
          <button style="z-index: 2; position: absolute; right: 5%;" onclick="buyItem('${shopItems[item].name}')">Buy</button>
        </td>
      </tr>
      `;
    }
  }
}

// buying items
function buyItem(name) {
  // scrolling the shopItems array to check if the item exists in the database
  for(item in shopItems) {
    // check if the item is inside the array and if it's infinite or not
    if(shopItems[item].name === name && shopItems[item].infinite) {
      // check if the wallet has enough money to pay for the item
      if(wallet >= shopItems[item].price) {
        // removing the money from the wallet
        wallet -= shopItems[item].price;
        // adding to the quantity
        shopItems[item].quantity += 1;
        // showing the icon on the header
        shopItems[item].icon.style.display = "inline-flex";
        // drawing the quantity
        quantityText.innerHTML = `${shopItems[item].quantity}`;
      }
    } else if(shopItems[item].name === name && !shopItems[item].infinite) {
      // check if the wallet has enough money to pay for the item
      if(wallet >= shopItems[item].price) {
        // removing money from the wallet
        wallet -= shopItems[item].price;
        // showing the item's icon on the desktop
        shopItems[item].icon.style.display = "inline-flex";
        // removing the item from the array
        shopItems.splice(item, 1);
        // set bought to true
        shopItems[item].bought = true;
        // redrawings
        displayShopItems();
      }
    }
  }
}

// displaying all the emails
function displayEmails() {
  // clear the emailWindowBody before drawing the emails onto it
  emailWindowBody.innerHTML = '';
  // scrolling through the emails array for information
  for(email in emails) {
    emailWindowBody.innerHTML += `<tr><td class="item" onclick="displaySpecificEmail('${emails[email].title}')"><p>${emails[email].title}</p></td></tr>`;
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
      emails.splice(email, 1);
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
      emails.splice(email, 1);
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

// checking if the enter key is pressed inside of the console window
consoleWindow.addEventListener('keydown', (event) => {
  if(!paused) {
    switch(event.keyCode) {
      // check if the enter key has been pressed
      case enter:
        // scroll through the consoleCommands array
        for(command in consoleCommands) {
          // check if the command exists in the consoleCommands array
          if(consoleCommands[command].name === toLowerCase(consoleWindowInput.value)) {
            // display output
            consoleWindowOutput.innerHTML = `${consoleCommands[command].output}`;
            // reset the input value
            consoleWindowInput.value = "";
          }
        }
      break;
    }
  }
});

// display day jobs
function displayDayJobs() {
  // getting all of the jobs inside of the dayJobs array
  for(job in dayJobs) {
    // displaying all of the jobs to the dayJobTable
    dayJobTable.innerHTML += `<tr><td class="item" onclick="displaySpecificDayJob('${dayJobs[job].name}')"><p>${dayJobs[job].name}</p></td></tr>`;
  }
}

// displaying the specific dayjob that the player clicked on
function displaySpecificDayJob(name) {
  // scrolling through the dayJobs array
  for(job in dayJobs) {
    // checking if the name exists in the directory
    if(dayJobs[job].name === name) {
      // display all of the information we need do.
      specificDayJobName.innerHTML = `${name}`;
      dayJobDescription.innerHTML = `${dayJobs[job].description}<button type="button" onclick="acceptDayJob('${name}', ${dayJobs[job].duration})">Take</button>`;
      specificDayJobWindow.style.display = "block";
    }
  }
}

// accepting a day job
function acceptDayJob(name, duration) {
  // scroll through the dayJobs array
  for(job in dayJobs) {
    // check if the dayJob exists in the array
    if(dayJobs[job].name === name && !jobFinished) {
      // reset cooldown timer
      dayJobsCooldown = 15000;
      doingJob = true;
      pay = dayJobs[job].pay;
      // TODO: time lapse effect
      doJob(duration); 
    }
  }
}

function doJob(duration) {
  // check if doingJob is equal to true
  if(!doingJob) return;
  // set the overlay display to block;
  overlay.style.display = "block";
  // setup a countdown system
  jobCountdown = duration;
  // subtract from the countdown
  jobCountdown -= 1;
}

// connecting to wifis
passwordInput.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case enter:
      for(let i = 0; i < wpaOnes.length; i++) {
        if(wpaOnes[i].password === passwordInput.value) {
          connectedToWifi = true;
          wifiConnectedTo = wpaOnes[i].name;
          passwordInput.value = "";
          break;
        }
      }
      for(let i = 0; i < wpaTwos.length; i++) {
        if(wpaTwos[i].password === passwordInput.value) {
          connectedToWifi = true;
          wifiConnectedTo = wpaTwos[i].name;
          passwordInput.value = "";
          break;
        }
      }
    break;
  }
});

function showPasswordInput(name, password) {
  switch(passwordInputOpen) {
    case true:
      passwordInputWindow.style.display = "none";
      passwordInputOpen = false;
    break;
    case false:
      passwordInputWindow.style.display = "block";
      passwordInputOpen = true;
      passwordInputHeader.innerHTML = `Connecting to: ${name}`;
    break;
  }
}

function connectToWiFi(name) {
  for(wifi in publicDomains) {
    if(publicDomains[wifi].name === name) {
      wifiConnectedTo = publicDomains[wifi].name;
      connectedToWifi = true;
    }
  }
}

function displayWiFis() {
  for(wifi in publicDomains) {
    publicDomainDropDownBody.innerHTML += `<tr><td class="item" onclick="connectToWiFi('${publicDomains[wifi].name}')"><p>${publicDomains[wifi].name}</p></td></tr>`;
  }
  for(wifi in wpaOnes) {
    wpaOneDropDownBody.innerHTML += `<tr><td onclick="showPasswordInput('${wpaOnes[wifi].name}', '${wpaOnes[wifi].password}')" class="item"><p>${wpaOnes[wifi].name}</p></td></tr>`;
  }
  for(wifi in wpaTwos) {
    wpaTwoDropDownBody.innerHTML += `<tr><td onclick="showPasswordInput('${wpaTwos[wifi].name}', '${wpaTwos[wifi].password}')" class="item"><p>${wpaTwos[wifi].name}</p></td></tr>`;
  }
}

// enabling and disabling dark mode
function enableDarkMode() {
  switch(usingDark) {
    case true:
      usingDark = false;
    break;
    case false:
      usingDark = true;
    break;
  }
}

// .toLowerCase()
function toLowerCase(value) {
  return value.toLowerCase();
}

// .toUpperCase()
function toUpperCase(value) {
  return value.toUpperCase();
}

// main game loop
function update() {
  // checking if dark mode is being used
  if(usingDark) {
    document.body.style.backgroundColor = "#191919";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "lightgrey";
    document.body.style.color = "black";
  }
  // updating audio levels
  clickAudio.volume = volume;
  notificationAudio.volume = volume;
  // checking if the game is paused
  if(!paused) {
    // updating the wifi connection ui
    if(connectedToWifi) {
      currentlyConnectedWifi.innerHTML = `${wifiConnectedTo}`;
    } else if(!connectedToWifi) {
      currentlyConnectedWifi.innerHTML = `Not Connected`;
    }

    // checking if the emailCount is below the email cap
    if(emailCount < maxEmails) {
      // lowering the timer
      emailTimer -= 1;
    }
    // checking if the timer is below or equal to 0
    if(emailTimer <= 0) {
      // generating emails
      generateEmail();
      // checking if the email window is open or not
      if(!emailWindowOpen) {
        // incrementing the newEmails variable
        newEmails++;
        // playing the notification sound
        notificationAudio.play();
      }
      // adding to the email count
      emailCount++;
      // reseting the timer to a random value
      emailTimer = Math.floor(Math.random() * 5000);
    }
    // checking if the newEmails is equal to zero, if so, set the newEmailContainer display to none. (Hiding it)
    if(newEmails == 0) {
      newEmailContainer.style.display = "none";
    } else {
      // if the newEmails variable is not equal to zero, show the newEmailContainer and show how many new emails there are.
      newEmailContainer.style.display = "flex";
      newEmailCount.innerHTML = `${newEmails}`;
    }
    // scrolling through the shopItems array
    for(item in shopItems) {
      // checking if the item is there
      if(shopItems[item].name === "Back Door Hack") {
        // checking the quantity of the back door hack
        if(shopItems[item].quantity > 0) {
          backDoorHackTimer -= 1;
          moneyAmount = 5 * shopItems[item].quantity;
        }
      }
    }
    // checking if backDoorHackTimer has gone off
    if(backDoorHackTimer <= 0) {
      wallet += moneyAmount;
      backDoorHackTimer = 5000;
    }
    // checking if doingJob is true
    if(doingJob) {
      if(jobCountdown > 0) {
        // begin the countdown
        jobCountdown -= 1;
      }
      if(jobCountdown <= 0) {
        jobCountdown = 0;
        overlay.style.display = "none";
        doingJob = false;
        wallet += pay;
        pay = 0;
        jobFinished = true;
      }  
    }
    if(jobFinished) {
      dayJobsCooldown -= 1;
      if(dayJobsCooldown <= 0) {
        dayJobsCooldown = 2500;
        jobFinished = false;
      }
    }
    // drawing the player wallet onto the shop header
    shopHeader.innerHTML = `Shop<p style="float: right;">Wallet: ${wallet}</p>`;
  }
  // a simple check to see if the doingJob and jobCountdown variables are good
  window.requestAnimationFrame(update);
}

// begin the cracking process
function beginCracking(type, name) {
  switch(type) {
    case 'wpa-1':
      WPAOneCountdown--;
      if(WPAOneCountdown <= 0) {
        for(wifi in wpaOnes) {
          if(wpaOnes[wifi].name === name) {
            wpaOneCrackerOutput.innerHTML = `The password to: ${name} is ${wpaOnes[wifi].password}`;
            window.cancelAnimationFrame(beginCracking);
            break;
          }
        }
        WPAOneCountdown = defaultWPAOneCountdown;
      }
    break;
    case 'wpa-2':
      WPATwoCountdown--;
      if(WPATwoCountdown <= 0) {
        for(wifi in wpaTwos) {
          if(wpaTwos[wifi].name === name) {
            wpaTwoCrackerOutput.innerHTML = `The password to: ${name} is ${wpaTwos[wifi].password}`;
            window.cancelAnimationFrame(beginCracking);
            break;
          }
        }
      }
    break;
  }
  window.requestAnimationFrame(beginCracking);
}

// running wifi cracking command uwu
function crackWPAOne(name) {
  for(let i = 0; i < wpaOnes.length; i++) {
    if(wpaOnes[i].name === name) {
      beginCracking('wpa-1', name);
      break;
    }
  }
}

//// checking if the enter key has been pressed on the WPA Cracker inputs
// WPA One Cracker
wpaOneCrackerInput.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case enter:
      inputValue = wpaOneCrackerInput.value;
      if(toLowerCase(inputValue.slice(0, 5)) === "crack") {
        crackWPAOne(`${inputValue.slice(5, inputValue.length)}`);
      } else if(toLowerCase(inputValue) === "help") {
        wpaOneCrackerOutput.innerHTML = wpaOneCrackerCommands[0].output;
      } else if(toLowerCase(inputValue) === "clear") {
        wpaOneCrackerOutput.innerHTML = wpaOneCrackerCommands[1].output;
      }
    break;
  }
});

// checking if the enter key has been pressed inside of the volume adjuster input
volumeAdjuster.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case enter:
      volume = volumeAdjuster.value;
    break;
  }
});

window.addEventListener('load', () => {
  volumeAdjuster.value = volume.toString();
  displayShopItems();
  displayDayJobs();
  displayWiFis();
});

window.requestAnimationFrame(beginCracking);
window.requestAnimationFrame(update);
