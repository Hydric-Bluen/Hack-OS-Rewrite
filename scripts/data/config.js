// pause menu variables
const pauseMenu           = document.getElementById('pause-menu');
const pauseMenuIcon       = document.getElementById('pause-menu-icon');
// console window variables
const consoleWindow       = document.getElementById('console-window');
const consoleWindowIcon   = document.getElementById('console-window-icon');
const consoleWindowInput  = document.getElementById('command-line-input');
const consoleWindowOutput = document.getElementById('command-line-output');
// email window variables
const emailWindow         = document.getElementById('email-window');
const emailWindowIcon     = document.getElementById('email-window-icon');
const emailWindowBody     = document.getElementById('email-window-body-table');
// specific email variables
const specificEmail       = document.getElementById('specific-email');
const specificEmailAuthor = document.getElementById('author');
const specificEmailTopic  = document.getElementById('topic');
const specificEmailBody   = document.getElementById('body-content');
// new email count notification
const newEmailContainer   = document.getElementById('new-emails');
const newEmailCount       = document.getElementById('new-email-count');

// Audio
const clickAudio          = document.getElementById('click');
const notificationAudio   = document.getElementById('notification');

// config things
let pauseMenuOpen     = false;
let consoleWindowOpen = false;
let emailWindowOpen   = false;
let specificEmailOpen = false;

// timers
let emailTimer = Math.floor(Math.random() * 5000);

// emails
let emails     = [];
let maxEmails  = 10;
let emailCount = 0;
let newEmails  = 0;

// accepted emails
let acceptedEmails     = [];
let maxAcceptedEmails  = 5;
let acceptedEmailCount = 0;

// pausing
let paused = false;
